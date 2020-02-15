import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  @Input() hardware;
  isList = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isList = false;
    if (this.router.url.includes('hardware')) {
      this.isList = true;
    }
  }

}
