import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: '';
  title = 'itassets-frontend';

  constructor(private router: Router) {}

  refreshUrl($event) {
    // @ts-ignore
    this.url = this.router.url;
  }
}
