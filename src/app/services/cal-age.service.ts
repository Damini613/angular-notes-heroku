import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class CalAgeService {

  constructor() { }

  calculateAge(dob:number){
    return new Date().getFullYear()-dob    
  }
}
