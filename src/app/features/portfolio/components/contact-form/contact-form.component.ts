import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { NgIf, NgStyle } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrl: 'contact-form.component.scss',
  imports: [ReactiveFormsModule, NgStyle, NgIf, MatProgressSpinner],
  providers: [EmailService],
  standalone: true,
})
export class ContactFormComponent {
  formSubmitted = false;
  message: string = '';

  constructor (private emailService: EmailService) {}

  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  onSubmit () {
    this.formSubmitted = true;
    const { email, message } =  this.contactForm.value;
    this.emailService.sendMessage(email, message).subscribe({
      next: (data) => {
        this.message = data.message;
        this.formSubmitted= false;
      },
      error: (errors) => {
        console.log(errors);
      },
    });
  }

}
