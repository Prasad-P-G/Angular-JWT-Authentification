import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private uservice: UserService, private router: Router,private toastr:ToastrService) { }
  canActivate() {
    if (localStorage.getItem('token')) {
      this.toastr.info("You are already logged in","Have fun!")
      return true;
    } else {
      this.toastr.error("ERROR","Please login first!")
      this.router.navigate(['/login'])
      return false;
    }    
  }
}
