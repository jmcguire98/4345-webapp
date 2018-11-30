import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../../domain/models/profile';
import { AlertService } from '../../domain/services/alert.service';
import { ProfileRepository } from '../../domain/profile-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  @Input()
  public profile: Profile;
  public currentUser: Profile;
  public oldPassword: string;
  public newPassword: string;
  public secondPassword: string;
  public password = {} as any;

  constructor(
    private alertService: AlertService,
    public router: Router,
    public profileRepository: ProfileRepository,
  ) {
    this.profile = {};
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  update() {
    this.password.oldPassword = this.oldPassword;
    this.password.newPassword = this.newPassword;
    if (this.newPassword !== this.secondPassword) {
       this.alertService.clear();
       this.alertService.error('Error new passwords did not match');
     } else {
       console.log(this.password);
       this.profileRepository.update(`api/updatePassword/${this.currentUser.username}`, this.password).subscribe(x => {
         console.log(this.password.newPassword);
         this.alertService.clear();
         this.alertService.success('You have sucessfuly updated your password');
         this.router.navigateByUrl(`/home/profile/${this.currentUser.username}`);
         });
     }
     this.newPassword = '';
     this.oldPassword = '';
     this.secondPassword = '';
   }

 }
