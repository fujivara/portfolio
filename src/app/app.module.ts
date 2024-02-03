import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header.component';
import { AppRouterModule } from './app-router.module';
import { AboutComponent } from './features/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { SkillSetComponent } from './features/skill-set/skill-set.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactInfoComponent } from './core/components/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillSetComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ContactInfoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
