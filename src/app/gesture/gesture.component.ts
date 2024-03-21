import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.scss']
})
export class GestureComponent implements OnInit {

  profileList: any
  navState: any 

  constructor(private service: ProfileService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.navState = localStorage.getItem('navState');
    this.getProfile();
  }

  getProfile(){
      this.profileList = this.service.getProfiles()
  }

  getCardTransform(index: number): string {
    // alert()
    return `translateY(${index * 20}px)`;
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
