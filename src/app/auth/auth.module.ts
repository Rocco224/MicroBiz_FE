import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    LoginComponent,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
