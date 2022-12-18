import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../model/film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film: Film= new Film();
  constructor() { }

  ngOnInit(): void {
  }

}
