import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getData(){
    return ['course1', 'course2', 'course3'];
  }

  constructor() { }

}
