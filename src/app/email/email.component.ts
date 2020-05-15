import { Component } from '@angular/core';
import { EmailService } from 'app/email/email.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

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

  // set up reactive form
  private createForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
    this.emailCtrl = this.emailForm.get('email');
    this.nameCtrl = this.emailForm.get('name');
    this.messageCtrl = this.emailForm.get('message');
  }

  public sendEmail(): void {
    const valid = this.validateForm();
    if (valid) {
      this.btnDisabled = true;
      this.btnLabel = '';
      this.showLoader = true;
      this.emailService.sendEmail(this.emailForm.value)
        .then(res => this.handleResponse(res))
        .catch(err => this.handleError(err));
    }
  }

  private validateForm(): boolean {
    this.validationMessage = '';

    if (this.emailCtrl.invalid) {
      this.validationMessage = 'Please include a valid email.';
      return false;
    } else if (!this.nameCtrl.value || !this.messageCtrl.value) {
      this.validationMessage = 'Please complete all form fields.';
      return false;
    } else {
      return true;
    }
  }

  private handleResponse(res): void {
    this.showLoader = false;
    this.btnLabel = 'Message Sent';
    this.resetForm();
  }

  private handleError(err): void {
    this.showLoader = false;
    this.validationMessage = 'Oops! Something went wrong.';
    this.btnLabel = 'Send';
  }

  private resetForm(): void {
    this.emailForm.setValue({name: '', email: '', message: ''});
  }

}
