import { Component } from '@angular/core';
import { Card } from "./card/card";
import { Product } from './product/product';
import { CommonModule } from '@angular/common';
import { Glass } from "./glass/glass";
import { Cart } from "../cart/cart";
import { CartIcon } from './cart-icon/cart-icon';

interface IProduct {
    name: string,
    amount: number,
    max: number,
    price: number,
    unit: string
}

interface ILemonade {
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
export class Lemonade {

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

    currentLemonade: ILemonade = { lemonJuice: 0, sugar: 0, iceCubes: 0, price: 0 };

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
                lemonJuice: this.products[0].amount,
                sugar: this.products[1].amount,
                iceCubes: this.products[2].amount,
                price: 0
            };
            this.currentLemonade.price = this.calculatePrice();
            this.cartLemonades.push(this.currentLemonade);
            console.log(this.cartLemonades);
            this.resetProducts();
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
