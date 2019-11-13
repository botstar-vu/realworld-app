import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validInput = false;

  constructor(
    private registerService: RegisterService,
    private routes: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.register(form.value.email, form.value.username, form.value.password);
  }

  register(email: string, username: string, password: string) {
    this.registerService.register(email, username, password).then(
      (response) => {
        this.routes.navigate(['/login']);
      }
    )
  }

  validate(form: NgForm) {
    this.validInput = form.value.email && form.value.password && form.value.username;
  }

}
