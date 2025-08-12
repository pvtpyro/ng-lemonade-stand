import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';


interface ILemonade {
    id: number,
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

    @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

    totalPrice: number = 0;

    receiveLemonadeId(id:number) {
        this.secondPassLemonadeIdEvent.emit(id);
    }



    ngOnInit(): void {
        this.lemonades.forEach(
            (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
        );
    }

}
