import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverComponent } from './components/hover/hover.component';
import { LikeComponent } from './components/like/like.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MovieCardComponent, HoverComponent, LikeComponent],
	exports: [ MovieCardComponent, HoverComponent, LikeComponent],
})
export class SharedModule { }
