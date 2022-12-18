import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeComponent} from "./liste/liste.component";
import {AppComponent} from "./app.component";
import {FilmComponent} from "./liste/film/film.component";

const routes: Routes = [
  { path: 'liste', component: ListeComponent },
  {
    path: 'film', children: [
      { path: 'Avatar', component:    FilmComponent},
      { path: 'Ernest', component:    FilmComponent },
      { path: 'Wakanda', component:   FilmComponent },
      { path: 'ChatPotte2', component: FilmComponent },
      { path: 'Corsage', component:   FilmComponent},
    ]
  },
  { path: '',   redirectTo: '/app.component', pathMatch: 'full' },
  { path: '**', component: AppComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
