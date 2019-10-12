import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingChallengesPageComponent } from './pages/coding-challenges-page/coding-challenges-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { GistsService } from './services/github/gists.service';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionPageComponent,
    CodingChallengesPageComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GistsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
