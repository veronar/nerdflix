import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	@Output() sortTitle = new EventEmitter<string>();
	@Output() sortRating = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

	sortByTitle(value: string) {
		this.sortTitle.emit(value);
	}

	sortByRating(value: string) {
		this.sortRating.emit(value);
	}

}
