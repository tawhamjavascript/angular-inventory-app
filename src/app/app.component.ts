import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<Product>;
  constructor () { 
    this.products = [
      new Product(
      'MYSHOES',
      'Black Running Shoes', '/assets/images/grey-fluffy-domestic-cat-with-long-hair-showing-its-affection-to-a-brown-dog-with-long-hair.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product(
      'NEATOJACKET',
      'Blue Jacket', '/assets/images/front-view-of-beautiful-dog-with-copy-space.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product(
      'NICEHAT',
      'A Nice Black Hat', '/assets/images/selective-focus-shot-of-an-adorable-kooikerhondje-dog.jpg', ['Men', 'Accessories', 'Hats'],
      29.99)
    ];
  }
  productWasSelected(product: Product): void {
    console.log("product clicked", product);
  }
}
