import { Component } from '@angular/core';
import { projectColumnData } from '../static-home-data/project-columns-data';

@Component({
  selector: 'app-project-columns',
  templateUrl: './project-columns.component.html',
  styleUrls: ['./project-columns.component.css']
})

export class ProjectColumnsComponent {
  columns = projectColumnData;
}
