import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-child',
  templateUrl: './resume-child.component.html',
  styleUrls: ['./resume-child.component.css'],
})
export class ResumeChildComponent {
  @Input() jobData: any;
}
