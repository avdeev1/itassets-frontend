import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  id = this.router.url.split('/').pop();
  isCreate = false;
  comp: any;
  fakeListSoft = [];
  fakeListHard = [];
  fakeListAdd = [];
  softList = ['OC', 'PROGRAM'];
  hardList = ['MOTHERBOARD', 'RAM', 'ROM', 'GPU', 'CPU'];
  addList = ['MONITOR', 'KEYBOARD', 'MOUSE'];
  compList = ['PC', 'NOTEBOOK'];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if (this.router.url === '/create') {
      this.isCreate = true;
      this.create();
      return;
    }
    this.isCreate = false;
    this.update();
  }

  update() {
    this.http.get(`api/computer/${this.router.url.split('/').pop()}`).subscribe((res: any) => {
      this.comp = res;
      this.fakeListSoft = res.softwareList;
      this.fakeListHard = res.hardwareList;
      this.fakeListAdd = res.addonList;
    });
  }

  create() {
    this.comp = {
      name: '',
      computerCategory: '',
      description: '',
      softwareList: [],
      hardwareList: [],
      addonList: [],
      employee: {
        lastName: '',
        firstName: '',
        middleName: '',
        department: {
          id: '',
        },
      }
    };
    this.fakeListSoft = this.comp.softwareList;
    this.fakeListHard = this.comp.hardwareList;
    this.fakeListAdd = this.comp.addonList;
  }

  addNew(hard: string) {
    switch (hard) {
      case 'hard':
        this.comp.hardwareList.push({
          name: '',
          hardwareCategory: '',
          description: '',
        });
        this.fakeListHard = this.comp.hardwareList;
        break;

      case 'soft':
        this.comp.softwareList.push({
          name: '',
          softwareCategory: '',
          description: '',
        });
        this.fakeListSoft = this.comp.softwareList;
        break;

      case 'add':
        this.comp.addonList.push({
          name: '',
          description: '',
        });
        this.fakeListAdd = this.comp.addonList;
        break;
    }
  }

  saveData() {
    console.log(this.comp);
    if (this.isCreate) {
      this.createData();
      return;
    }
    this.http.put(`api/computer/${this.id}`, this.comp).subscribe(res => {
      console.log('finish');
      console.log(res);
      this.router.navigateByUrl(`/computer/${this.id}`);
    });
  }

  createData() {
    this.http.post('api/computer', this.comp).subscribe(res => {
      console.log(res);
    });
  }

  delete(list: string, i: number) {
    this.comp[list].splice(i, 1);

    this.fakeListSoft = this.comp.softwareList;
    this.fakeListHard = this.comp.hardwareList;
    this.fakeListAdd = this.comp.addonList;
  }

  isSelected(item, index, key, value?) {
    if (!value) {
      return item === this.comp[key];
    }
    return item === this.comp[key][index][value];
  }
}
