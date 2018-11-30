import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdateProfileComponent } from './updateprofile/updateprofile.component';
import { ProfileRepository } from './domain/index';
import { AlertService, AuthenticationService, UserService } from './domain/services/index';
import { PasswordChangeComponent } from './updateprofile/password-change/password-change.component';
import { ProfilePageComponent } from './profilepage/profilepage.component';
import { ServerService } from './auth/server.service';
import { PostService } from './disscussion/post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DisscussionComponent } from './disscussion/disscussion.component';
import { CommentsComponent } from './disscussion/comments/comments.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './domain/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { JwtInterceptor } from './domain/helpers/jwt.interceptor';
import { AlertComponent } from './alert/alert.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
      children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'update', component: UpdateProfileComponent },
      { path: 'profile/:username', component: ProfilePageComponent },
      { path: 'chat', component: DisscussionComponent },
    ]
  },
  { path: '**', redirectTo: 'signup' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UpdateProfileComponent,
    PasswordChangeComponent,
    ProfilePageComponent,
    NavbarComponent,
    DisscussionComponent,
    CommentsComponent,
    HomeComponent,
    AlertComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ServerService,
    PostService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ProfileRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
