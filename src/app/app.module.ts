import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header.component';
import { AppRouterModule } from './app-router.module';
import { AboutComponent } from './features/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { SkillSetComponent } from './features/skill-set/skill-set.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactInfoComponent } from './core/components/contact-info.component';
import { ExperienceComponent } from './features/expereince/experience.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillSetComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ContactInfoComponent,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCheckbox,
    FormsModule,
    MatIconButton,
    MatIcon,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
