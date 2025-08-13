import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router, RouterLink } from '@angular/router';
@Component({
    selector: 'app-checkout',
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './checkout.html',
    styleUrl: './checkout.scss'
})
export class Checkout {
    constructor(private cartData: CartService, private router: Router) { }
    totalPrice: number = 0;

    ngOnInit() {
        this.cartData.currentTotalPrice.subscribe((currentTotalPrice) => (this.totalPrice = currentTotalPrice))
    }

}
