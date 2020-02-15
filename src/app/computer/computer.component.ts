import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  @Input() computer;
  id = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = '';
    if (!this.computer) {
      this.http.get(`api${this.router.url}`).subscribe(res => {
        this.computer = res;
      });
      this.id = this.router.url.split('/').pop();
    }
  }

  isCanUpdate() {
    return !this.router.url.includes('category');
  }

}
