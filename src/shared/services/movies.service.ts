import { Injectable } from '@angular/core';
import { BehaviorSubject }from 'rxjs';
import { default as movieData } from '../../model/imdb-top-50.json' ;
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
	movieList!: Movie[];
	totalLikes = new BehaviorSubject<number>(0);

	constructor() {
		this.movieList = movieData.data.movies;
		for(let movie of this.movieList) {
			movie.like = false;
		}
	}

	getMovieList() {
		return this.movieList;
	}

	updateLike(id: string) {
		let index = this.movieList.findIndex(movie => movie.idIMDB === id);
		this.movieList[index].like = !this.movieList[index].like;
		this.countLikes();
	}

	async countLikes() {
		let count = 0;
		this.movieList.forEach((movie) => {
			if (movie.like === true) count++;
		})
		this.totalLikes.next(count);

	}

	getLikes() {
		return this.totalLikes.asObservable();
	}

}
