import { Component } from '@angular/core';
import { ProductService } from './productService';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'app';
  constructor(private pService: ProductService) { }
  product: Product = this.pService.getProduct();

}
