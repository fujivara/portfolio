import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/layout/header.component';

@Component({
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
})
export class PortfolioComponent {}
