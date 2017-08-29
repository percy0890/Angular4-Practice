import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-coure',
  templateUrl: './coure.component.html',
  styleUrls: ['./coure.component.css']
})
export class CoureComponent implements OnInit {
  courseHeading = "Number of Courses:"
  imageUrl = ""
  courses;

  constructor(service: DataService) {
    this.courses = service.getData();
  }

  ngOnInit() {
  }

}
