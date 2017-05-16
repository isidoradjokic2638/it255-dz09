import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about';

export const ROUTES: Routes = [
   { path: '', component: AppComponent },
   { path: 'about', component: AboutComponent }
 ];
