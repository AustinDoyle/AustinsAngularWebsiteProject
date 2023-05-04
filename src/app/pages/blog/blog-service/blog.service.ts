import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    constructor(private http: HttpClient) { }

    getBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>('assets/json/blogs.json').pipe(
            catchError((error) => {
                console.error('Error fetching blogs:', error);
                return of([]);
            })
        );
    }

    getBlog(id: number): Observable<Blog | undefined> {
        return this.getBlogs().pipe(
            map((blogs) => blogs.find((blog) => blog.id === id))
        );
    }
}