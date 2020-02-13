import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css']
})
export class DataInfoComponent implements OnInit {

  map: Map<any, any> = new Map<any, any>();

  @Input() first: boolean;
  @Input() data: any;
  object = Object;

  isObject(obj) {
    return typeof obj === 'object';
  }

  isNull(obj) {
    return obj === null;
  }
  constructor() { }

  ngOnInit() {
  }

  findAllNodes(data: object) {
    Object.keys(data).forEach(key => {
      if (typeof data[key] !== 'object' && data[key]) {
        this.map.set(key, data[key]);
      } else {
        this.findAllNodes(data[key]);
      }
    });
  }

  isNumber(key: string) {
    return !isNaN(Number(key)) && typeof Number(key) === 'number';
  }
}
