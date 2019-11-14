import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ErrorLogService } from 'src/app/shared/error-log.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validInput = false;

  constructor(
    private registerService: RegisterService,
    private errorService: ErrorLogService
    ) { }

  ngOnInit() {
    this.errorService.clear();
  }

  onSubmit(form: NgForm) {
    this.register(form.value.email, form.value.username, form.value.password);
  }

  register(email: string, username: string, password: string) {
    this.registerService.register(email, username, password).then(
      (response) => {
        this.errorService.clear();
        if (response.code != 200) {
          this.errorService.add(response.msg);
        }
      }
    )
  }

  validate(form: NgForm) {
    this.validInput = form.value.email && form.value.password && form.value.username;
  }

}
