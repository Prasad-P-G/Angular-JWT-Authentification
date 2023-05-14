import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private toastr:ToastrService) {}

  RegisterUser(user:user){
    //console.warn(user);
    // http://localhost:8082/api/User/Test
    this.http.post('http://localhost:8082/api/User/register',user)
    .subscribe((result:any)=>{
      if(result){
      this.toastr.success("User Registered successfully!", "Success")
      } 


    })
  }

  // http://localhost:81/api/seller/prasad@test.com/abc123
  userLogin(data:user):Observable<string>{
       // console.warn(data);

       return this.http.post<string>('http://localhost:8082/api/Login',data)
  }

  userDetails():Observable<user[]>{
    // let headers = new HttpHeaders()
    // .set("Authorization", 'bearer ' + localStorage.getItem('token'));
    
    // return this.http.get<user[]>('http://localhost:8082/api/user/GetUsers',{headers});    
    return this.http.get<user[]>('http://localhost:8082/api/user/GetUsers');
       
   }


}
