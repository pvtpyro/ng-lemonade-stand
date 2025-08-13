import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "./item/item";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import IOrder from '../models/Order';
import ILemonadeStand from '../models/LemonadeStand';
import ILemonade from '../models/Lemonade';




@Component({
    selector: 'app-cart',
    imports: [Item, CommonModule, ReactiveFormsModule],
    templateUrl: './cart.html',
    styleUrl: './cart.scss'
})
export class Cart {

    @Input() lemonades: ILemonade[] = [];

    @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

    totalPrice: number = 0;

    customerName: string = '';
    customerNumber: string = '';

    lemonadeStands: ILemonadeStand[] = [];

    customerForm: FormGroup = new FormGroup({
        selectedStand: new FormControl<ILemonadeStand | undefined>(undefined, [Validators.required])
    })

    constructor(private cartData: CartService, private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
        this.cartData.currentStandOptions.subscribe(
            (currentStandOption) => (this.lemonadeStands = currentStandOption)
        );
        this.cartData.selectedStand.subscribe((selectedStand) =>
            this.customerForm.setValue({ selectedStand: selectedStand })
        );
        this.cartData.customerName.subscribe(customerName => this.customerName = customerName);
        this.cartData.customerPhoneNumber.subscribe(customerPhoneNumber => this.customerNumber = customerPhoneNumber);
        this.lemonades.forEach((lemonade) => {
            this.totalPrice = this.totalPrice + lemonade.price;
            this.cartData.updateTotalPrice(this.totalPrice);
        });

    }

    receiveLemonadeId(id: number) {
        this.secondPassLemonadeIdEvent.emit(id);
    }

    updateSelectedStand() {
        this.cartData.updateSelectedStand(
            this.customerForm.controls['selectedStand'].value
        );
    }

    onSubmit() {
        let lemonades = this.lemonades.map(({lemonJuice, sugar, iceCubes, price}) => ({
            lemonJuice,
            sugar,
            iceCubes,
            price,
            water: lemonJuice / 2
        }));

        let order: IOrder = {
            lemonades,
            customer: {
                name: this.customerName,
                phoneNumber: this.customerNumber
            },
            lemonadeStand: {
                name: this.customerForm.controls.selectedStand.value.name
            }
        }

        
        this.cartData.placeOrder(order).subscribe(response => {
            console.log(response)
            if(response.total) {
                this.cartData.updateTotalPrice(response.total)
            }
        })

        this.router.navigateByUrl('/checkout');
    }

}
