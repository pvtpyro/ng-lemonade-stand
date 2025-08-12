import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {

    @Input() name: string = "";
    @Input() amount: number = 0;
    @Input() max: number = 10;
    @Input() unit: string = "";

}
