import { Component, OnInit } from '@angular/core';
import { Card } from "./card/card";
import { Product } from './product/product';
import { CommonModule } from '@angular/common';
import { Glass } from "./glass/glass";
import { Cart } from "../cart/cart";
import { CartIcon } from './cart-icon/cart-icon';
import ILemonadeStand from '../models/LemonadeStand';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

interface IProduct {
    name: string,
    amount: number,
    max: number,
    price: number,
    unit: string
}

interface ILemonade {
    id: number,
    lemonJuice: number,
    sugar: number,
    iceCubes: number,
    price: number
}

@Component({
    selector: 'app-lemonade',
    imports: [Card, Product, CommonModule, Glass, Cart, CartIcon],
    templateUrl: './lemonade.html',
    styleUrl: './lemonade.scss'
})
export class Lemonade implements OnInit {

    cartVisible: boolean = false;

    products: IProduct[] = [
        {
            name: "Lemon Juice",
            price: 0.50,
            amount: 0,
            max: 10,
            unit: "oz"
        },
        {
            name: "Sugar",
            price: 0.25,
            amount: 0,
            max: 8,
            unit: "tsp"
        },
        {
            name: "Ice",
            price: 0.05,
            amount: 0,
            max: 12,
            unit: "cubes"
        }
    ];


    cartLemonades: ILemonade[] = [];

    currentLemonade: ILemonade = { id: 0, lemonJuice: 0, sugar: 0, iceCubes: 0, price: 0 };

    cartId = 0;

    customerName: string = '';
    customerPhoneNumber: string = '';
    selectedStand: ILemonadeStand | undefined;

    constructor(private cartData: CartService, private router: Router) {}

    ngOnInit(): void {
        this.cartData.customerName.subscribe(customerName => this.customerName = customerName)
        this.cartData.customerPhoneNumber.subscribe(customerPhoneNumber => this.customerPhoneNumber = customerPhoneNumber)
        this.cartData.selectedStand.subscribe(selectedStand => this.selectedStand = selectedStand)

        if(!this.customerName || !this.customerPhoneNumber || !this.selectedStand) {
            this.router.navigateByUrl('/')
        }
    }

    increment(productName: string) {
        Lemonade.bind(this)
        this.products.map(product => {
            if (product.name === productName) {
                product.amount < product.max ? product.amount += 1 : product.amount;
            }
        })

    }

    decrement(productName: string) {
        Lemonade.bind(this)
        this.products.map(product => {
            if (product.name === productName) {
                product.amount > 0 ? product.amount -= 1 : product.amount;
            }
        })
    }

    toggleCart() {
        this.cartVisible = !this.cartVisible;
    }

    addToCart() {
        if(this.products[0].amount > 0 || this.products[1].amount > 0 || this.products[2].amount > 0) {
            this.currentLemonade = {
                id: this.cartId,
                lemonJuice: this.products[0].amount,
                sugar: this.products[1].amount,
                iceCubes: this.products[2].amount,
                price: 0
            };
            this.currentLemonade.price = this.calculatePrice();
            this.cartLemonades.push(this.currentLemonade);
            this.cartId ++;
            console.log(this.cartLemonades);
            this.resetProducts();
        }
    }

    removeFromCart(id: number) {
        // this.cartLemonades.filter(l => l.id !== id);
        const itemIdx = this.cartLemonades.findIndex((l) => l.id === id);
        if (itemIdx > -1) {
            this.cartLemonades.splice(itemIdx, 1);
        }
    }

    calculatePrice(): number {
        return (
            this.currentLemonade.lemonJuice * this.products[0].price +
            this.currentLemonade.sugar * this.products[1].price +
            this.currentLemonade.iceCubes * this.products[2].price
        );
    }


    resetProducts() {
        // this is wet. I dont like it
        this.products = [
            {
                name: 'Lemon Juice',
                price: 0.5,
                amount: 0,
                max: 10,
                unit: 'oz',
            },
            {
                name: 'Sugar',
                price: 0.25,
                amount: 0,
                max: 8,
                unit: 'tsp',
            },
            {
                name: 'Ice',
                price: 0.05,
                amount: 0,
                max: 12,
                unit: 'cubes',
            },
        ];
    }

}
