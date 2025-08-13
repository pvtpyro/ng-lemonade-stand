import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router, RouterLink } from '@angular/router';
import ILemonadeStand from '../models/LemonadeStand';
@Component({
    selector: 'app-checkout',
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './checkout.html',
    styleUrl: './checkout.scss'
})
export class Checkout {

    totalPrice: number = 0;

    customerName: string = '';
    customerPhoneNumber: string = '';
    selectedStand: ILemonadeStand | undefined;

    constructor(private cartData: CartService, private router: Router) { }

    ngOnInit() {
        this.cartData.currentTotalPrice.subscribe((currentTotalPrice) => (this.totalPrice = currentTotalPrice))

        this.cartData.customerName.subscribe(customerName => this.customerName = customerName)
        this.cartData.customerPhoneNumber.subscribe(customerPhoneNumber => this.customerPhoneNumber = customerPhoneNumber)
        this.cartData.selectedStand.subscribe(selectedStand => this.selectedStand = selectedStand)

        if(!this.customerName || !this.customerPhoneNumber || !this.selectedStand) {
            this.router.navigateByUrl('/')
        }
    }

}
