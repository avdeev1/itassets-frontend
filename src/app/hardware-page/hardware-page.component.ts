import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {titles} from '../services/title-pages';

@Component({
  selector: 'app-hardware-page',
  templateUrl: './hardware-page.component.html',
  styleUrls: ['./hardware-page.component.css']
})
export class HardwarePageComponent implements OnInit {
  prevUrl = '';
  data = [];
  isLoading = true;
  isInvalid = false;
  isAdd = false;
  addHard = {
    name: '',
    description: '',
    hardwareCategory: this.router.url.split('/').reverse()[0],
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
    if (!this.addHard.name || !this.addHard.description) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
  }

  private updateForm() {
    this.isInvalid = false;
    this.isAdd = false;
    this.addHard = {
      name: '',
      description: '',
      hardwareCategory: this.router.url.split('/').reverse()[0],
    };
  }

  getName() {
    return titles[this.router.url.split('/').pop()];
  }
}
