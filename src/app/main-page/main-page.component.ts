import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  url: string;
  data: any;
  isLoading = false;

  @Input() set _url(value) {
    this.url = value;
    if (this.url && this.url !== '/main' &&  this.url.indexOf('/staff') === -1) {
      this.isLoading = true;
      this.http.get(`/api${this.url}`).subscribe(res => {
        this.isLoading = false;
        this.data = res;
      });
    } else {
      this.router.navigateByUrl('/').then();
      this.url = '/main';
      this.data = {};
    }
  }
  constructor(private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
  }

  getPage() {
    if (!this.url || this.url === '/main' || this.url.indexOf('staff') !== -1) {
      return 'main';
    }
    if (Object.keys(this.data).length === 0) {
      if (this.isLoading) {
        return 'loading';
      }
      return 'nodata';
    }
    return 'data';
  }
}
