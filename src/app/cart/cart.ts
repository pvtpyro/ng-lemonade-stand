import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


interface ILemonade {
    id: number,
    lemonJuice: number,
    sugar: number,
    iceCubes: number,
    price: number
}

interface LemonadeStand {
    id: number,
    name: string
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

    lemonadeStands: LemonadeStand[] = [];

    customerForm: FormGroup = new FormGroup({
        selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required])
    })

    ngOnInit(): void {
        this.cartData.currentStandOptions.subscribe(
            (currentStandOption) => (this.lemonadeStands = currentStandOption)
        );
        this.cartData.currentStand.subscribe((currentStand) =>
            this.customerForm.setValue({ selectedStand: currentStand })
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
