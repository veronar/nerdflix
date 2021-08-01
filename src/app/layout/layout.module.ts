import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [NavbarComponent, SidebarComponent],
	exports: [NavbarComponent, SidebarComponent],
	imports: [CommonModule, RouterModule, SharedModule],
})
export class LayoutModule {}
