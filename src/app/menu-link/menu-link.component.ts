import {Component, Input, OnInit} from '@angular/core';
import {IMenu} from '../services/menu-service-items';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent implements OnInit {

  @Input() menu: IMenu;
  constructor() { }

  ngOnInit() {}
}
