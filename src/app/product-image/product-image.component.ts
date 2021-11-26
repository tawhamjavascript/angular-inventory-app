import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  template: `
  <img class = "product-image" [src] = "product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit(): void {
  }

}
