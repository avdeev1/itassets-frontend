import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {
  @Input() addon;

  isList = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isList = false;
    if (this.router.url.includes('addon')) {
      this.isList = true;
    }
  }


}
