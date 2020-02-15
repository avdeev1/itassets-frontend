import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {titles} from '../services/title-pages';

@Component({
  selector: 'app-addon-page',
  templateUrl: './addon-page.component.html',
  styleUrls: ['./addon-page.component.css']
})
export class AddonPageComponent implements OnInit {
  prevUrl = '';
  data = [];
  isLoading = true;
  isInvalid = false;
  isAdd = false;
  addAdd = {
    name: '',
    description: '',
    // hardwareCategory: this.router.url.split('/').reverse()[0],
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    setInterval(this.checkUrl.bind(this), 100);
  }

  checkUrl() {
    if (this.prevUrl !== this.router.url) {
      this.prevUrl = this.router.url;
      this.updateForm();
      this.getData();
    }
  }

  private getData() {
    this.data = [];
    this.isLoading = true;
    this.http.get(`/api${this.router.url}`).subscribe((res: any) => {
      this.data = res;
      this.isLoading = false;
    });
  }

  openForm() {
    this.isAdd = !this.isAdd;
  }

  submit() {
    if (!this.addAdd.name || !this.addAdd.description) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
  }

  private updateForm() {
    this.isInvalid = false;
    this.isAdd = false;
    this.addAdd = {
      name: '',
      description: '',
      // hardwareCategory: this.router.url.split('/').reverse()[0],
    };
  }

  getTitle() {
    return titles[this.router.url.split('/').pop()];
  }
}
