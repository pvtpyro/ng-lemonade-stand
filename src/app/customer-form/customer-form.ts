import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { globalModules } from '../global-modules';
import { InputComponent } from "./input/input";
import { PhoneFormControl } from './phone-form-control';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import ILemonadeStand from '../models/LemonadeStand';
// import { response } from 'express';

@Component({
    selector: 'app-customer-form',
    imports: [...globalModules, ReactiveFormsModule, InputComponent],
    templateUrl: './customer-form.html',
    styleUrl: './customer-form.scss'
})
export class CustomerForm implements OnInit {

    lemonadeStands: ILemonadeStand[] = [
        { id: 1, name: 'Cooksys Lemonade Stand 1' },
        { id: 2, name: 'Cooksys Lemonade Stand 2' },
        { id: 3, name: 'Cooksys Lemonade Stand 3' },
        { id: 4, name: 'Cooksys Lemonade Stand 4' },
        { id: 5, name: 'Cooksys Lemonade Stand 5' }
    ];

    customerForm: FormGroup = new FormGroup({
        name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
        phoneNumber: new PhoneFormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
        selectedStand: new FormControl<ILemonadeStand | undefined>(undefined, [Validators.required])
    })

    constructor(private cartData: CartService, private router: Router) { }

    ngOnInit(): void {
        this.cartData.loadLemonadeStands().subscribe((response) => {
            this.cartData.updateStandOptions(response)
        })
        this.cartData.currentStandOptions.subscribe(currentStandOptions => this.lemonadeStands = currentStandOptions)

    }

    onSubmit() {
        // console.log(`Name: ${this.customerForm.controls['name'].value}`)
        // console.log(`Phone Number: ${this.customerForm.controls['phoneNumber'].value}`)
        // console.log(`Selected Lemonade Stand: ${JSON.stringify(this.customerForm.controls['selectedStand'].value)}`)

        this.cartData.updateSelectedStand(this.customerForm.controls.selectedStand.value);
        this.cartData.updateCustomerName(this.customerForm.controls.name.value);
        this.cartData.updateCustomerPhoneNumber(this.customerForm.controls.phoneNumber.value);

        this.cartData.updateStandOptions(this.lemonadeStands); // temp

        this.router.navigateByUrl('/lemonade');
    }

}
