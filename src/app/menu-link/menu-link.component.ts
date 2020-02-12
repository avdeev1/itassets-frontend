import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMenu} from '../services/menu-service-items';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent implements OnInit {

  @Output() refresh: EventEmitter<any> = new EventEmitter();

  @Input() menu: IMenu;
  constructor() { }

  ngOnInit() {}

  changeUrl() {
    this.refresh.emit();
  }
}
