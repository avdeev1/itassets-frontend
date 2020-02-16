import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-app-staff',
  templateUrl: './app-staff.component.html',
  styleUrls: ['./app-staff.component.css']
})
export class AppStaffComponent implements OnInit {
  object = Object;
  isLoading = true;
  data: any;
  prevUrl = '';
  isAdd = false;
  addPerson = {
    firstName: '',
    lastName: '',
    middleName: '',
    department: {
      id: this.router.url.split('/').reverse()[0],
    },
  };
  isInvalid = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.prevUrl = this.router.url;
    this.getData();
    setInterval(this.checkUrl.bind(this), 100);
  }

  getNumberStaff() {
    if (this.router.url === '/employee') {
      return 'Список сотрудников';
    }
    return `Отдел #${this.router.url.split('/').pop()}`;
  }

  getData() {
    this.data = [];
    this.isLoading = true;
    this.http.get(`/api${this.router.url}`).subscribe(res => {
      this.isLoading = false;
      this.data = res;
    });
  }

  checkUrl() {
    if (this.prevUrl !== this.router.url) {
      this.prevUrl = this.router.url;
      this.updateForm();
      this.getData();
    }
  }

  openForm() {
    this.isAdd = !this.isAdd;
  }

  submit() {
    if (!this.addPerson.middleName || !this.addPerson.middleName || !this.addPerson.middleName) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
    this.http.post('api/employee', this.addPerson).subscribe(res => {
      this.data.push(res);
    });
  }

  private updateForm() {
    this.isInvalid = false;
    this.isAdd = false;
    this.addPerson = {
      firstName: '',
      lastName: '',
      middleName: '',
      department: { id: this.router.url.split('/').reverse()[0], },
    };
  }
}
