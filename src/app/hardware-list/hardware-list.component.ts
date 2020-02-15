import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
