import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-landing',
  templateUrl: './image-landing.component.html',
  styleUrls: ['./image-landing.component.scss'],
})
export class ImageLandingComponent {
  @Input() description!: string;
  @Input() imageUrl!: string;
}
