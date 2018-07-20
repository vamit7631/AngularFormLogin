import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent
      },    
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      }         
    ])
  ],
  providers: [RecordsService,AuthService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
