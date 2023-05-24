import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = []
  readonly displayedColumns = ['name', 'category', 'actions'];
  @Output() add = new EventEmitter(false);

  constructor() { }

    onAdd() {
      this.add.emit(true);
    }

}
