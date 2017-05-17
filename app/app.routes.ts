 import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';

export const ROUTES: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path : 'people', component: PeopleComponent}
 ];
