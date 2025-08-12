import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lemonade } from "./lemonade/lemonade";
import { CustomerForm } from "./customer-form/customer-form";

@Component({
    selector: 'app-root',
    imports: [CommonModule, Lemonade, CustomerForm],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('lemonadestand');
}
