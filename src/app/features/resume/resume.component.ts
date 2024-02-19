import { Component, ViewEncapsulation } from '@angular/core';
import { NgForOf } from '@angular/common';


@Component({
  templateUrl: 'resume.component.html',
  styleUrl: 'resume.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    NgForOf,
  ],
})
export class ResumeComponent {
  expertise: string[] = [
    'JavaScript/TypeScript', 'NodeJs', 'NestJs', 'ExpressJs', 'React', 'Angular',
  ];
  softSkills: string[] = [
    'Communication', 'Multi-tasking', 'Adaptability/Flexibility', 'Problem-solving', 'Time management', 'Leadership',
  ];
}
