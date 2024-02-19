import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/portfolio/routes/about/about.component';
import { SkillSetComponent } from './features/portfolio/routes/skill-set/skill-set.component';
import { ContactComponent } from './features/portfolio/routes/contact/contact.component';
import { ExperienceComponent } from './features/portfolio/routes/expereince/experience.component';
import { ResumeComponent } from './features/resume/resume.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portfolio/about',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'skills',
        component: SkillSetComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'experience',
        component: ExperienceComponent,
      },
    ],
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
