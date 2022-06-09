import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  product: Product[] = [];

  constructor(private prodcutService: ProductService) {}

  ngOnInit() {
    this.prodcutService.fetchProduct().subscribe((product) => {
      this.product = product;
    });
  }
}
