import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: Product[] = [
    {
      description: 'Product description',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNn5MAUl6HR5wRr-dN5ZAh8d3dfAaGEYNU4GEvPislaz8Czg0LnGVjrSjz-qkNg47mQNgexTsFnbu7KwFeS4jXe6QZn4-qCFAfqIsQ3R1AhvIVNSHI6cyb&usqp=CAE',
    },
  ];

  fetchProduct() {
    return of(this.product);
  }
}
