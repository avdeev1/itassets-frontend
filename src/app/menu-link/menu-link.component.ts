import {Component, Input, OnInit} from '@angular/core';

interface ILink {
  link: string;
  title: string;
}

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent implements OnInit {

  @Input() link: ILink;
  constructor() { }

  ngOnInit() {}

}
