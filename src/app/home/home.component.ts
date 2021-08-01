import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/shared/services/movies.service';
import { Movie } from 'src/shared/types/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	movieList!: Movie[];

	sort = '';
	rating = '0';

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
		this.getMovies();
  }

	getMovies() {
		this.movieList = this.movieService.getMovieList();
	}

	sortByTitle($event: string) {
		if ($event === this.sort) {
			return
		} else if ( $event === 'asc') {
			this.movieList.sort((a, b) => (a.title > b.title ? 1 : -1))
		} else if ($event === 'desc') {
			this.movieList.sort((a, b) => (a.title < b.title ? 1 : -1))
		}
		this.sort = $event;
	}

	sortByRating($event: string) {
		if ($event === '') {
			this.getMovies();
		} else {
			this.getMovies();
			this.movieList = this.movieList.filter((movie) => {
				return movie.rating === $event;
			})
		}
	}

	updateLike($event: string) {
		this.movieService.updateLike($event);
	}

}
