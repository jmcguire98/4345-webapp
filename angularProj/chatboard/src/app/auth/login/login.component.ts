import { NgForm, NgModel, FormsModule, FormControl } from '@angular/forms';
import { ServerService } from './../server.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../../domain/services/index';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  model: any = {};
  loading = false;
  returnUrl: string;
  user;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private serverService: ServerService) {}

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
        console.log([this.returnUrl]);
        this.loading = false;
        this.alertService.clear();
        console.log('reached');
      },
      error => {
        console.log('reached');
        this.alertService.clear();
        this.alertService.error('Wrong username or password');
        this.loading = false;
      }
    );
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
