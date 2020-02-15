import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  @Input() soft;
  isList = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes('software')) {
      this.isList = true;
    }
  }

}
