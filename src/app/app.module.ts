import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { AboutComponent } from './features/portfolio/routes/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { SkillSetComponent } from './features/portfolio/routes/skill-set/skill-set.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactInfoComponent } from './core/components/contact-info.component';
import { ExperienceComponent } from './features/portfolio/routes/expereince/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillSetComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ContactInfoComponent,
    BrowserAnimationsModule,
    MatCheckbox,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
