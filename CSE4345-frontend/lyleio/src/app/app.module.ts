import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ChatBoardComponent } from './chat-board/chat-board.component';
import { CommentsComponent } from './chat-board/comments/comments.component';
import { HomeComponent } from './home/home.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profileUpdate', component: ProfileUpdateComponent},
  { path: 'logout', component: SigninComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    ChatBoardComponent,
    CommentsComponent,
    HomeComponent,
    ProfileUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
