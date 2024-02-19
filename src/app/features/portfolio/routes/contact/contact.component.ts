import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactInfoComponent } from '../../../../core/components/contact-info.component';

@Component({
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  imports: [ContactFormComponent, ContactInfoComponent],
  standalone: true,
})
export class ContactComponent {}
