import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.scss',
})
export class AboutComponent {
  constructor (private router: Router) {
  }

  onResumeOpen () {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/resume']),
    );

    window.open(url, '_blank');
  }
}
