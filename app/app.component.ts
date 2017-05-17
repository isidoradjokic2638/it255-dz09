import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./assets/global.scss']
})
export class AppComponent  { name = 'Isidora'; }
