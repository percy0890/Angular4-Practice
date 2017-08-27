import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-coure',
  templateUrl: './coure.component.html',
  styleUrls: ['./coure.component.css']
})
export class CoureComponent implements OnInit {
  courses;

  constructor(service: DataService) {
    this.courses = service.getData();
  }

  ngOnInit() {
  }

}
