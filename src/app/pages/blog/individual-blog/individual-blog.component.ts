import { Component } from '@angular/core';
import { Blog } from '../blog-service/blog.model';
import { BlogService } from '../blog-service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-individual-blog',
  templateUrl: './individual-blog.component.html',
  styleUrls: ['./individual-blog.component.css'],
})
export class IndividualBlogComponent {
  blog?: Blog;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.blog = this.blogService.getBlog(id);

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlog(id).subscribe(blog => {
      if (blog) {
        this.blog = blog;
        this.http.get<{ content: string }>(blog.contentFile).subscribe(data => {
          this.blog.content = data.content;
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}
