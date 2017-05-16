import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutComponent } from './pages/about';
import { ROUTES } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, AboutComponent, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
