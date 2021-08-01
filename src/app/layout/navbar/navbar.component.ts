import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/shared/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
	totalLikes = new Observable<number>();
	likes: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
		this.totalLikes = this.movieService.getLikes();
  }

	ngOnDestroy() {
	}

}
