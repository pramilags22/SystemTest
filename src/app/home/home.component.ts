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

  startX: any;
  startY: any;
  swipeThreshold = 50; // Adjust as needed
   swipeCoord?: any;
 swipeTime?: any;

 parentSubject:Subject<string> = new Subject();
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
    this.router.navigate(['/profile-details'], {state: {data: item}});
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

  onSwipeLeft() {
    // Logic for swipe left
  }
  
  onSwipeRight() {
    // Logic for swipe right
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
  alert()
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
  
      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          // Do whatever you want with swipe
      }
    }
  }


 cardAnimation(value: string) {
  alert()
  this.parentSubject.next(value);
}
}
