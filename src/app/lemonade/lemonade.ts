import { Component } from '@angular/core';
import { Card } from "./card/card";
import { Product } from './product/product';
import { CommonModule } from '@angular/common';
import { Glass } from "./glass/glass";

interface IProduct {
    name: string,
    amount: number,
    max: number,
    price: number,
    unit: string
}

@Component({
    selector: 'app-lemonade',
    imports: [Card, Product, CommonModule, Glass],
    templateUrl: './lemonade.html',
    styleUrl: './lemonade.scss'
})
export class Lemonade {

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
    ]

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

}
