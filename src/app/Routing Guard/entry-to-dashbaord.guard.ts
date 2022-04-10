import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryToDashbaordGuard implements CanActivate {
  canActivate(){
    alert('Entry Guard here !! you are authorize')
      return true;
  }
  
}
