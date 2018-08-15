import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = 'List of courses';
  courses: any;
  colspan = 2;
  isActive = true;
  email2 = 'email@gmail.com';

  // constructor() {
  //   const service = new CourseService();
  //   this.courses = service.getCourses();
  // }
  // Dependency injection
  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  onDivClicked() {
    console.log('div Clicked');
  }
  onButtonClicked($event) {
    $event.stopPropagation();
    console.log('button clicked', $event);
  }
  onKeyUp(email) {
    console.log(email);
  }
  onTwoWay() {
     console.log(this.email2);
  }
  ngOnInit() {
  }

}
