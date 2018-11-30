import { Component, OnInit } from '@angular/core';
import { ProfileRepository } from '../domain/profile-repository.service';
import { Profile } from '../domain/models/profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})

export class ProfilePageComponent implements OnInit {
  public currentUser: Profile;
  testUser: any;
  userShow: Profile;

  constructor(
    private profileService: ProfileRepository,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.activatedRoute.params.subscribe((params: any) => {
      this.profileService.getAccount(params.username).subscribe(user => {
        this.userShow = user;
      });
    });
  }

  public getProfile(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('userName');
    this.profileService.getAccount(id)
      .subscribe(profile => this.userShow = profile);
  }
}
