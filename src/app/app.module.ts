import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header.component';
import { AppRouterModule } from './app-router.module';
import { AboutComponent } from './features/about/about.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
