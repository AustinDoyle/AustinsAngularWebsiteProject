import { Component } from '@angular/core';
import { fadeInLefToRight, slideUp } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [fadeInLefToRight, slideUp],
})
export class ToolbarComponent {
  navItems = [
    { label: 'Home', url: '#' },
    { label: 'Blog', url: '/blog' },
  ];

  logoName = 'Austin Doyle';

  subheaderName = 'Software Developer | Test Engineer';
}
