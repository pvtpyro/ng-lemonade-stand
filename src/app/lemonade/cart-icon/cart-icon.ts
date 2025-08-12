import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  imports: [CommonModule],
  templateUrl: './cart-icon.html',
  styleUrl: './cart-icon.scss'
})
export class CartIcon {
    cartCount: number = 0;
}
