import { Routes } from '@angular/router';
import { CustomerForm } from './customer-form/customer-form';
import { Lemonade } from './lemonade/lemonade';
import { Checkout } from './checkout/checkout';

export const routes: Routes = [
    {
        path: '', component: CustomerForm
    },
    {
        path: 'lemonade',
        component: Lemonade
    },
    {
        path: 'checkout',
        component: Checkout
    }
];
