import { Component } from '@angular/core';
import { Box } from 'src/app/image-box/box-service/box.model';
import { BoxService } from 'src/app/image-box/box-service/box.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carouselImages = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
  ];

  boxes: Box[] = [];

  constructor(private boxService: BoxService) { }

  ngOnInit() {
    this.boxService.getBoxes().subscribe(data => {
      this.boxes = data;
    });
  }
}
