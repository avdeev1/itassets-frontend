import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  buttonText = 'Добавить';
  buttonClick = true;
  textArray = ['Закрыть', 'Добавить'];
  inputs = [''];
  values = [''];
  fakeValues = [''];
  isInvalid = false;

  @Output() push: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  toggle() {
    this.buttonClick = !this.buttonClick;
    this.buttonText = this.textArray[Number(this.buttonClick)];
  }

  submit() {
    if (!this.allRequired()) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
    const postBody = JSON.stringify(this.inputs.reduce((res, elem, index) => {
      res[elem] = this.values[index];
      return res;
    }, {}));
    if (this.router.url.indexOf('department') !== -1) {
      this.postEmployee(postBody);
      return;
    }
    this.http.post(`/api/${this.router.url.split('/')[1]}`, postBody, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).subscribe(res => {
      this.refreshForm();
      this.push.emit(res);
    });
  }

  private postEmployee(postBody) {
    this.http.post(`/api/employee`, postBody, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).subscribe(res => {
      this.refreshForm();
      this.push.emit(res);
    });
  }

  addField() {
    this.inputs.push('');
    this.values.push('');
    this.fakeValues.push('');
  }

  private allRequired() {
    return this.values.every((elem, index) => {
      return elem !== '' && this.values[index] !== '';
    });
  }

  private refreshForm() {
    this.inputs = [''];
    this.values = [''];
    this.fakeValues = [''];
  }

  deleteRow(index: number) {
    if (this.fakeValues.length <= 1) { return; }
    this.values.splice(index, 1);
    this.inputs.splice(index, 1);
    this.fakeValues.pop();
  }
}
