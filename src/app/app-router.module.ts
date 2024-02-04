import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { SkillSetComponent } from './features/skill-set/skill-set.component';
import { ContactComponent } from './features/contact/routes/contact/contact.component';
import { ExperienceComponent } from './features/expereince/experience.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}