import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfiles(): any[] {
    return [
      { id: 1, name: "Priyanka", description: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor,Chennai,Tamil Nadu,India.', img: '../../assets/100_4.jpg' },
      { id: 2, name: "Aishwarya", description: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor,Chennai,Tamil Nadu,India.', img: '../../assets/300_15.jpg' },
      { id: 3, name: "Pragati", description: '27 Yrs, 5 ft 2 in, MBBS, Doctor, Poosam, Hindu - Kayastha,Chennai,Tamil Nadu,India.', img: '../../assets/300_19.jpg' },
      { id: 4, name: "Ramya", description: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor,Chennai,Tamil Nadu,India.', img: '../../assets/300_20.jpg' },
      { id: 5, name: "Vivi", description: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor,Chennai,Tamil Nadu,India.', img: '../../assets/user5.jpg' },
    
    ];
  }
}
