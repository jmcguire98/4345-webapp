import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../domain/services/user.service';
import { Profile } from '../domain/models/profile';


@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: Profile;
  users: Profile[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers();
    });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
    }
  }
