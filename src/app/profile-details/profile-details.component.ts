import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  profileList: any
  navState: any
  constructor(private service: ProfileService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.navState = localStorage.getItem('navState');
    this.getProfile();
  }

  getProfile(){
      this.profileList = this.service.getProfiles()
      let profileId = history.state.data ? history.state.data.id : localStorage.getItem("profileId")
      console.log(profileId);
      if(profileId){
        localStorage.setItem("profileId", profileId)
      if(this.profileList.find((x: any) => x.id == profileId)){
        let currentIndex = this.profileList.findIndex((x: any) => x.id === profileId);
        const elementToMove = this.profileList[currentIndex];
        this.profileList.splice(currentIndex, 1); 
        this.profileList.splice(0, 0, elementToMove);
      }
    }
    this.cdr.detectChanges()
  }
  ngOnDestroy() {
    localStorage.removeItem("profileId")
  }

}
