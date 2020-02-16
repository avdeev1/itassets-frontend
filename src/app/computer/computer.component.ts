import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  @Input() computer;
  id = '';
  haveOwner = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = '';
    this.haveOwner = false;
    if (!this.computer) {
      this.http.get(`api${this.router.url}`).subscribe(res => {
        this.computer = res;
        if (this.computer.employee !== null) {
          this.haveOwner = true;
        }
      });
      this.id = this.router.url.split('/').pop();
    }
    if (this.computer && this.computer.employee !== null) {
      this.haveOwner = true;
    }
  }

  isCanUpdate() {
    return !this.router.url.includes('category');
  }

  delete(id: number) {
    this.http.delete(`api/computer/${id}`).subscribe(res => {
      this.router.navigateByUrl(`computer/category/${this.computer.computerCategory}`);
    });
  }
}
