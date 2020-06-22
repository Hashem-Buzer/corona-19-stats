import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnglishComponent } from './home/english/english.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'english', component: EnglishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
