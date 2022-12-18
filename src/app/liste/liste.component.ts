import {Component, OnInit} from '@angular/core';
import {Film} from "../model/film";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  film1 : Film = {title:'Avatar',path:'assets/avatar.jfif'};
  film2 : Film = {title:'Le Chat Potté 2',path: 'assets/chatPotte.jfif'};
  film3 : Film = {title:'Corsage', path:'assets/corsage.jfif'};
  film4 : Film = {title:'Ernest et Célestine', path:'assets/ernest.jfif'};
  film5 : Film = {title:'Wakanda Forever', path:'assets/wakanda.jfif'};

  films: Film[]  = [this.film1, this.film2, this.film3,this.film4,this.film5];
  public choosenFilm: Film= new Film();

  constructor() {
  }

  ngOnInit(): void {
  }

  public showFilm(choosenFilm: Film): Film {
    return this.choosenFilm = choosenFilm;
  }

}
