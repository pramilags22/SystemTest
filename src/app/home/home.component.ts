import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/services/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  profileList: any

  constructor(private service: ProfileService, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
      this.profileList = this.service.getProfiles()
      console.log( this.profileList);
  }
  goToProfileDetails(item: any): void {
    localStorage.setItem('navState', 'profile-details')   
    this.router.navigate(['/profile-details',  item.id]);
  }

  goToGestureScreen(): void {
    localStorage.setItem('navState', 'gesture')
    this.router.navigate(['/gesture']);
  }

  removeProfile(profile: any): void {
    this.profileList = this.profileList.filter((p: { id: any; }) => p.id !== profile.id);
    this.openSnackBar('Profile removed successfully');
  }
  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000, // Duration in milliseconds
    });
  }
}
