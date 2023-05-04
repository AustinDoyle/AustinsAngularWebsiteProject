import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css'],
})
export class ResumeTemplateComponent {
  jobs = [
    {
      startDate: '2017',
      endDate: '2019',
      title: 'Software Engineer',
      description: [
        ' Developed E2E pipelines using Docker, Jenkins, Kubernetes, and Cypress, improving test efficiency',
        'Developed and maintained web applications for clients.',
        'Collaborated with cross-functional teams.',
        'Implemented responsive designs.',
      ],
    },
    {
      startDate: '2019',
      endDate: '2021',
      title: 'Senior Software Engineer',
      description: [
        'Led a team of developers.',
        'Contributed to the design and architecture of web applications.',
        'Mentored junior developers.',
      ],
    },
  ];
}
