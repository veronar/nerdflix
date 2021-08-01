import { Component, OnInit } from '@angular/core';
import * as movieData from '../../model/imdb-top-50.json' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	movieData = movieData;

  constructor() { }

  ngOnInit() {
		console.log(movieData);
  }

}
