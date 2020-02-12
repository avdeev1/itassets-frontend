import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  url: string;
  data: string;

  @Input() set _url(value) {
    console.log(value);
    this.url = value;
    if (this.url && this.url !== '/') {
      this.http.get(`/api${this.url}`).subscribe(res => {
        this.data = JSON.stringify(res);
      });
    } else {
      this.data = '';
    }
  }
  constructor(private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
  }

}
