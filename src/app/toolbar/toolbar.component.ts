import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  navItems = [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Contact', url: '#' },
  ];

  logoName = 'Austin Doyle';

  subheaderName = 'Software Developer | Test Engineer'
}
