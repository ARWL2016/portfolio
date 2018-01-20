import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/email/email.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Email } from 'app/email/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

   // email data
   emailForm: FormGroup;
   // email: Email;
  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // set up reactive form
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', []],
      message: ['', [Validators.required]]
    });
  }

  sendEmail() {
    console.log(this.emailForm);
    console.log(this.emailForm.value);

    this.emailService.sendEmail(this.emailForm.value)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
