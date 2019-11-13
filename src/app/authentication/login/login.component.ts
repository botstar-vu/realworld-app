import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validInput = false;

  constructor(
    private loginService: LoginService,
    private routes: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.login(form.value.email, form.value.password);
  }

  public login(email: string, password: string) {
    this.loginService.login(email, password).then(
      response => {
        if (response.code == 200) {
          this.routes.navigate(['/']);
        }
      }
    )
  }

  validate(form: NgForm) {
    this.validInput = form.value.email && form.value.password;
  }

}
