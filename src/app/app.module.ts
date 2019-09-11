import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingChallengesPageComponent } from './pages/coding-challenges-page/coding-challenges-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionPageComponent,
    CodingChallengesPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
