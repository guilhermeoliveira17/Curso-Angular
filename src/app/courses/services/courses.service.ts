import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  list(): Course[] {
    return [
      { _id: '1', name: 'React-native', category: 'mobile'}
    ];
  }

  constructor(private httpClient: HttpClient) { }
}
