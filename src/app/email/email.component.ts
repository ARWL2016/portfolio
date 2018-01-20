import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/email/email.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Email } from 'app/email/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

   // email model
   emailForm: FormGroup;
   emailCtrl: AbstractControl;
   nameCtrl: AbstractControl;
   messageCtrl: AbstractControl;

  // UI properties
   validationMessage: string;
   btnLabel = 'Send Message';
   btnDisabled = false;
   showLoader = false;

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {

  }

  private createForm() {
    // set up reactive form
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', []],
      message: ['', [Validators.required]]
    });
    this.emailCtrl = this.emailForm.get('email');
    this.nameCtrl = this.emailForm.get('name');
    this.messageCtrl = this.emailForm.get('message');
  }

  sendEmail() {
    this.validationMessage = '';

    console.log(this.emailCtrl, this.nameCtrl, this.messageCtrl);

    if (this.emailCtrl.invalid) {
      return this.validationMessage = 'Please include a valid email.';
    } else if (!this.nameCtrl.value || !this.messageCtrl.value) {
      this.validationMessage = 'Please complete all form fields.';
    } else {
      this.btnDisabled = true;
      this.btnLabel = '';
      this.showLoader = true;
      this.emailService.sendEmail(this.emailForm.value)
        .then(res => {
          console.log(res);
          this.showLoader = false;
          this.btnLabel = 'Message Sent';

        })
        .catch(err => {
          console.log(err);
          this.showLoader = false;
          this.validationMessage = 'Oops! Something went wrong.';
          this.btnLabel = 'Send';
        });
    }


  }

}
