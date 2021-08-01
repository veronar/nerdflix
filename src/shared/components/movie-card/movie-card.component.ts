import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
	@Input() movie: any;
	@Output() liked = new EventEmitter<string>();

  constructor() {
	}

  ngOnInit() {
  }

	changeLike() {
		this.liked.emit(this.movie.idIMDB);
		// this.movie.like = !this.movie.like;
	}

}
