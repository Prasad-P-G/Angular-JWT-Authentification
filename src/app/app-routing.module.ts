import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    component : LoginComponent,
    path :''
  },
  {
    component : LoginComponent,
    path :'login'
  },
  {
    component : ProfileComponent,
    path : 'profile',
    canActivate:[AuthGuard]
  },
  {
    component : SignupComponent,
    path : 'signup',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
