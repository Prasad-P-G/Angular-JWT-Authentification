import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: user[] = []

  constructor(private router: Router, private userSerivce: UserService) { }
  ngOnInit(): void {
    this.userSerivce.userDetails()
      // .subscribe((result)=>{
      //   this.users = result;
      //   console.warn(result);
      // })
      .subscribe({
        next: (result) => {
          //console.warn(result);    
          this.users = result;
        },
        error: (errors) => {
          throw errors;
        }
      });
  }
  logoutUser() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
  }

}
