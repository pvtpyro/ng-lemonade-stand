import { Component } from '@angular/core';
import { Item } from "./item/item";

@Component({
  selector: 'app-cart',
  imports: [Item],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

}
