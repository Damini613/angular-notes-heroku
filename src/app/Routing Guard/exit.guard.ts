import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../Routing/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(): boolean {
    // alert('you are not allowed')
    alert('Exit Guard here, you are allowed to exit')
    return true;
  }
}
