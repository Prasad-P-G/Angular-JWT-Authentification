import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  UserLogin(data: user) {
    //console.warn(data);
    this.userService.userLogin(data)
      .subscribe({
        next: (result: any) => {
          localStorage.setItem("token", result.token)
          this.toastr.success("Successfully signed-in!", 'Login Success')
          this.router.navigate(['/profile'])
        },
        error : (response)=>{
          if(response.status='401'){
          console.warn('The error status is - ' + response.status);          
          this.toastr.error("Pleasae Register/SignUp before login!", 'UnAuthorized user')
          }        
        }
        
      })
    // .subscribe((result:any)=>{
    //   if(result){
    //   //console.warn(result);   
    //   localStorage.setItem("token",result.token)
    //   this.toastr.success("Successfully signed-in!", 'Login Success')
    //   this.router.navigate(['/profile'])

    //   }else{
    //    this.toastr.error("Invalid user")        
    //   }
    // })
  }
}
