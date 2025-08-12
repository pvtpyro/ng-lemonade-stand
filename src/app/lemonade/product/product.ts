import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    imports: [],
    templateUrl: './product.html',
    styleUrl: './product.scss'
})
export class Product {

    @Input() name: string = "";
    @Input() amount: number = 0;
    @Input() max: number = 10;
    @Input() unit: string = "";

    @Output() incrementProductByName = new EventEmitter<string>()

    handleIncrement() {
        this.incrementProductByName.emit();
    }

    @Output() decrementProductByName = new EventEmitter<string>()

    handleDecrement() {
        this.decrementProductByName.emit()
    }

    increment() {
        this.amount += 1;
    }

    decrement() {
        this.amount -= 1;
    }

}
