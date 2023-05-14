import { Component } from '@angular/core';
import { user } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:UserService,private router:Router){}

  RegisterUser(data:user){
     this.service.RegisterUser(data);
     this.router.navigate(['/login'])
  }
}
