import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


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

    lemonadeStands: LemonadeStand[] = [
        { id: 1, name: 'Cooksys Lemonade Stand 1' },
        { id: 2, name: 'Cooksys Lemonade Stand 2' },
        { id: 3, name: 'Cooksys Lemonade Stand 3' },
        { id: 4, name: 'Cooksys Lemonade Stand 4' },
        { id: 5, name: 'Cooksys Lemonade Stand 5' }
    ];

    customerForm: FormGroup = new FormGroup({
        selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required])
    })

    onSubmit() {
        console.log(`Selected Lemonade Stand: ${JSON.stringify(this.customerForm.controls['selectedStand'].value)}`)
    }

    @Input() lemonades: ILemonade[] = [];

    @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

    totalPrice: number = 0;

    receiveLemonadeId(id: number) {
        this.secondPassLemonadeIdEvent.emit(id);
    }



    ngOnInit(): void {
        this.lemonades.forEach(
            (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
        );

        this.customerForm.setValue({
            selectedStand:  this.lemonadeStands[0]
        })
    }

}
