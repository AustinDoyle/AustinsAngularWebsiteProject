import { Component } from '@angular/core';
import { leftParagraphAbout, rightParagraphAbout } from 'src/app/pages/home/about-data';

@Component({
  selector: 'app-two-column-text',
  templateUrl: './two-column-text.component.html',
  styleUrls: ['./two-column-text.component.css']
})
export class TwoColumnTextComponent {
  leftColumnText = leftParagraphAbout;
  rightColumnText = rightParagraphAbout;
}
