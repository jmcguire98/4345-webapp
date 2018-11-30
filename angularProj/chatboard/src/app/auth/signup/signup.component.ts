import { ServerService } from './../server.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, NgForm, NgModel, FormControl } from '@angular/forms';
import { AlertService } from '../../domain/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
@ViewChild('f') signupForm: NgForm;

 users;
 loading = false;

  constructor(
    private serverService: ServerService,
    public router: Router,
    private alertService: AlertService
  ) { }

  addUser(form: NgForm) {
    this.loading = true;
    this.users = {
      firstname : this.signupForm.value.personalData.firstname,
      lastname: this.signupForm.value.personalData.lastname,
      email: this.signupForm.value.personalData.email,
      username: this.signupForm.value.personalData.username,
      password: this.signupForm.value.personalData.password,
      track: this.signupForm.value.personalData.trackSelect,
      gradYear: this.signupForm.value.personalData.gradYear
    };
    console.log(this.users);

    if (this.signupForm.value.personalData.password === this.signupForm.value.personalData.ConfirmPassword) {
    this.serverService.storeUser(this.users)
    .subscribe(
      (response) => {
        // tslint:disable-next-line:triple-equals
        if (response == 600) {
          this.alertService.clear();
          this.alertService.error('Invalid username!');
          this.loading = false;
        }
        // tslint:disable-next-line:triple-equals
        if (response == null) {
          this.router.navigateByUrl('/login');
        }
        console.log(response);
      },
        (error) => {
                  this.alertService.clear();
                  this.alertService.error('Internal server error!');
                  this.loading = false;
        }
    );
    } else {
      this.alertService.clear();
      // alert('Password does not match!');
      this.alertService.error('Password does not match!');
      this.loading = false;
    }
  }

  ngOnInit() {
  }

}
