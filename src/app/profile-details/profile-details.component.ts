import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  profileList: any
  navState: any
  constructor(private service: ProfileService, private router: Router, private cdr: ChangeDetectorRef,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.navState = localStorage.getItem('navState');
    this.getProfile();
  }

  getProfile() {
    this.profileList = this.service.getProfiles()
    let profileId = this.route.snapshot.paramMap.get('id')
    if (profileId) {
      let currentIndex = this.profileList.findIndex((x: any) => x.id == profileId);
      if (currentIndex !== -1) {
        const selectedProfile = this.profileList[currentIndex];
        this.profileList.splice(currentIndex, 1);
        this.profileList.unshift(selectedProfile);
      }
    }
    this.cdr.detectChanges()
  }
  

}
