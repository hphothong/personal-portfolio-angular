import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingChallengesPageComponent } from './pages/coding-challenges-page/coding-challenges-page.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';

const routes: Routes = [
  { path: 'introduction', component: IntroductionPageComponent },
  { path: 'coding-challenges', component: CodingChallengesPageComponent },
  {
    path: 'codingchallenges',
    redirectTo: 'coding-challenges',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'introduction', pathMatch: 'full' } // Catch-all redirect needs to be last in the routes.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
