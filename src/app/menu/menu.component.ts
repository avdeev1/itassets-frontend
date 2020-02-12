import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MENU_NAVBAR_LINK } from '../services/menu-service-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() refreshUrl: EventEmitter<any> = new EventEmitter();

  navbarLink = MENU_NAVBAR_LINK;
  constructor() { }

  ngOnInit() {}

  refresh($event) {
    this.refreshUrl.emit();
  }
}
