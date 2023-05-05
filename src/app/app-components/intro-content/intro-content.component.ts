import { Component, Input } from '@angular/core';
import { letterAnimation } from '../../animations/letter-by-letter.animation';
import { fadeInLefToRight, slideUp } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.css'],
  animations: [letterAnimation, fadeInLefToRight, slideUp],
})
export class IntroContentComponent {
  @Input() introText: string;
}
