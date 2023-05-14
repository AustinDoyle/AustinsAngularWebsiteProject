import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box } from './box.model';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private url = 'assets/json/site-info.json';

  constructor(private http: HttpClient) {}

  getBoxes(): Observable<Box[]> {
    return this.http.get<Box[]>(this.url);
  }
}