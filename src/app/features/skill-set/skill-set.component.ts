import { Component } from '@angular/core';
import { SkillModel } from './skill.model';

@Component({
  templateUrl: 'skill-set.component.html',
  styleUrl: 'skill-set.component.scss',
})
export class SkillSetComponent {
  skills: SkillModel[] = [
    {
      name: 'JavaScript/TypeScript',
      image: 'https://www.recompyle.com/assets/js-ts.jpg',
      description: 'I have an excellent knowledge of an ecosystem and datastructures',
    },
    {
      name: 'C/C++',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      description: 'I have an indepth knowledge of creating various datastructures and algorithms with C++',
    },
    {
      name: 'NodeJs',
      image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      description: 'I have a solid knowledge of a pure NodeJs ecosystem including good knowledge of asynchronous programming',
    },
    {
      name: 'Backend',
      image: 'https://pic.onlinewebfonts.com/thumbnails/icons_419978.svg',
      description: 'I am experienced with such technologies as ExpressJs, NestJs and Fastify',
    },
    {
      name: 'Databases',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/database-db-icon.png',
      description: 'I gained a valid knowledge working with PostgresQl and MySql databases and different ORMs as well as with raw SQl',
    },
    {
      name: 'Frontend',
      image: 'https://cdn4.iconfinder.com/data/icons/technology-83/1000/app_frontend_end_front_front-end_front_end_development-512.png',
      description: 'I am also known with frontend technologies such as React and Angular. I am always concerned of a great user experience',
    },
  ];

}
