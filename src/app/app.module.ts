import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		SharedModule,
		LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
