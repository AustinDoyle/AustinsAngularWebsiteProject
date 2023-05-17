import { Component, Input } from '@angular/core';
import { Box } from './box-service/box.model';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent {
  @Input() box: Box;
}
