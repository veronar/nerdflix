import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HoverComponent } from './components/hover/hover.component';
import { LikeComponent } from './components/like/like.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DropdownComponent, HoverComponent, LikeComponent],
	exports: [DropdownComponent, HoverComponent, LikeComponent],
})
export class SharedModule { }
