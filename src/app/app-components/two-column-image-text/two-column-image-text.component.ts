import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-column-image-text',
  templateUrl: './two-column-image-text.component.html',
  styleUrls: ['./two-column-image-text.component.css'],
})
export class TwoColumnImageTextComponent {
  @Input() imageUrl: string;
}
