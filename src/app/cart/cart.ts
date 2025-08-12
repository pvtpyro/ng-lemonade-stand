import { Component, Input } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';


interface ILemonade {
    lemonJuice: number,
    sugar: number,
    iceCubes: number,
    price: number
}


@Component({
    selector: 'app-cart',
    imports: [Item, CommonModule],
    templateUrl: './cart.html',
    styleUrl: './cart.scss'
})
export class Cart {


    @Input() lemonades: ILemonade[] = [];

    totalPrice: number = 0;

    ngOnInit(): void {
        this.lemonades.forEach(
            (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
        );
    }

}
