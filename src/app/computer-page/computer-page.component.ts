import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {titles} from '../services/title-pages';

@Component({
  selector: 'app-computer-page',
  templateUrl: './computer-page.component.html',
  styleUrls: ['./computer-page.component.css']
})
export class ComputerPageComponent implements OnInit {
  data = [];
  prevUrl = '';
  isLoading = true;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    setInterval(this.checkUrl.bind(this), 100);
  }

  checkUrl() {
    if (this.prevUrl !== this.router.url) {
      this.prevUrl = this.router.url;
      this.getData();
    }
  }

  getName() {
    return titles[this.router.url.split('/').pop()];
  }

  private getData() {
    this.isLoading = true;
    this.data = [];
    this.http.get(`/api${this.router.url}`).subscribe((res: any) => {
      this.data = res;
      this.isLoading = false;
    });
  }
}
