import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProfileService } from 'src/services/profile.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SwipeDirective } from 'src/common/swipe';
import { MatIconModule } from '@angular/material/icon';
import { GestureComponent } from './gesture/gesture.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileDetailsComponent, ProfileDetailsComponent, SwipeDirective, GestureComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CommonModule,
    MatSnackBarModule, MatButtonModule, MatIconModule, NgbModule, NgbCarouselModule, SwiperModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
