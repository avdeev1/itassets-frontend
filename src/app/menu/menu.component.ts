import { Component, OnInit } from '@angular/core';
import { MENU_NAVBAR_LINK } from '../services/menu-service-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarLink = MENU_NAVBAR_LINK;
  constructor() { }

  ngOnInit() {}

}
