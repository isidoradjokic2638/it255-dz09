import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutComponent } from './pages/about/about';
import { ROUTES } from './app.routes';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, AboutComponent, MenuComponent, HomeComponent, PeopleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
