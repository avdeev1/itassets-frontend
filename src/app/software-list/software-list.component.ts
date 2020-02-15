import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sowtware-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
