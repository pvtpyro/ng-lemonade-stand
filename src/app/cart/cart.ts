import { Component } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [Item, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

    lemonades = [
        {lemonJuice: 10, sugar: 0, iceCubes: 7, price: 10.99},
        {lemonJuice: 10, sugar: 2, iceCubes: 7, price: 4.99},
        {lemonJuice: 10, sugar: 8, iceCubes: 1, price: 2.00},
        {lemonJuice: 10, sugar: 8, iceCubes: 7, price: 6.99},
        {lemonJuice: 2, sugar: 1, iceCubes: 2, price: 2.33333},
        {lemonJuice: 10, sugar: 8, iceCubes: 7, price: 2.02},
    ]
}
