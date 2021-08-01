import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/shared/types/movie';
import { default as movieData } from '../../model/imdb-top-50.json' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	movieList!: Movie[];

  constructor() { }

  ngOnInit() {
		this.movieList = movieData.data.movies;
  }

}
