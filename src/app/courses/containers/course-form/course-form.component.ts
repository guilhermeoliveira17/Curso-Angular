import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']

  });

  constructor (private formBuilder: NonNullableFormBuilder,
     private service: CoursesService,
     private snackBar: MatSnackBar,
     private location: Location,
     private route: ActivatedRoute
     ) {
      const course: Course = this.route.snapshot.data['course'];
      this.form.setValue({
        _id: course._id,
        name: course.name,
        category: course.category
      });
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', '', {duration: 3000});
    this.onCancel();
  }

  onError(){
    this.snackBar.open('Erro ao salvar o curso!', '', {duration: 3000});
  }

}
