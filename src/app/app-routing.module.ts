import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CodingChallengesPageComponent } from './pages/coding-challenges-page/coding-challenges-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'coding-challenges', component: CodingChallengesPageComponent },
  { path: '**', redirectTo: '', component: HomePageComponent } // Catch-all redirect needs to be last in the routes.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
