import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-addon-list',
  templateUrl: './addon-list.component.html',
  styleUrls: ['./addon-list.component.css']
})
export class AddonListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
