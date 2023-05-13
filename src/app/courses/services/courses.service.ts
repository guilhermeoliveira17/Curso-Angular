import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      take(1),
      tap(courses => console.log(courses))
    );
  }

  constructor(private httpClient: HttpClient) { }
}
