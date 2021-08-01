import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesService } from 'src/shared/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
	totalLikes = new Observable<number>();
	subscriptions = new Subscription();

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
		// this.subscriptions.add(this.movieService.getLikes().subscribe((likes) => {
		// 	this.totalLikes = likes;
		// 	console.log(this.totalLikes);
		// }));
		this.totalLikes = this.movieService.getLikes();
  }

	ngOnDestroy() {
		this.subscriptions.unsubscribe()
	}

}
