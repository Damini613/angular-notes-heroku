import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {
 public data = new Subject()
  constructor() {
  }
}
