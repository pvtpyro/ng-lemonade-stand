import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import ILemonadeStand from '../models/LemonadeStand';


interface ILemonade {
    id: number,
    lemonJuice: number,
    sugar: number,
    iceCubes: number,
    price: number
}



@Component({
    selector: 'app-cart',
    imports: [Item, CommonModule, ReactiveFormsModule],
    templateUrl: './cart.html',
    styleUrl: './cart.scss'
})
export class Cart {

    constructor(private cartData: CartService, private router: Router) { }

    @Input() lemonades: ILemonade[] = [];

    @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

    totalPrice: number = 0;

    lemonadeStands: ILemonadeStand[] = [];

    customerForm: FormGroup = new FormGroup({
        selectedStand: new FormControl<ILemonadeStand | undefined>(undefined, [Validators.required])
    })

    ngOnInit(): void {
        this.cartData.currentStandOptions.subscribe(
            (currentStandOption) => (this.lemonadeStands = currentStandOption)
        );
        this.cartData.selectedStand.subscribe((selectedStand) =>
            this.customerForm.setValue({ selectedStand: selectedStand })
        );
        this.lemonades.forEach((lemonade) => {
            this.totalPrice = this.totalPrice + lemonade.price;
            this.cartData.updateTotalPrice(this.totalPrice);
        });

    }

    onSubmit() {
        console.log(`Selected Lemonade Stand: ${JSON.stringify(this.customerForm.controls['selectedStand'].value)}`);
        this.cartData.updateSelectedStand(this.customerForm.controls['selectedStand'].value);
         this.router.navigateByUrl('/checkout');
    }

    receiveLemonadeId(id: number) {
        this.secondPassLemonadeIdEvent.emit(id);
    }

    updateSelectedStand() {
        this.cartData.updateSelectedStand(
            this.customerForm.controls['selectedStand'].value
        );
    }

}
