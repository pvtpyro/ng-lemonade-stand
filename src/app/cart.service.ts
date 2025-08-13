import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import ILemonadeStand from "./models/LemonadeStand";


@Injectable({
    providedIn: 'root'
})

export class CartService {
    private standSource = new BehaviorSubject<ILemonadeStand | undefined>(undefined);
    selectedStand = this.standSource.asObservable();

    private standOptionsSource = new BehaviorSubject<ILemonadeStand[]>([]);
    currentStandOptions = this.standOptionsSource.asObservable();

    private customerNameSource = new BehaviorSubject<string>('');
    customerName = this.customerNameSource.asObservable();

    private customerPhoneNumberSource = new BehaviorSubject<string>('');
    customerPhoneNumber= this.customerPhoneNumberSource.asObservable();

    private totalPriceSource = new BehaviorSubject<number>(0);
    currentTotalPrice = this.totalPriceSource.asObservable();


    updateSelectedStand(stand: ILemonadeStand) {
        this.standSource.next(stand);
    }

    updateStandOptions(stands: ILemonadeStand[]) {
        this.standOptionsSource.next(stands);
    }

    updateCustomerName(name: string) {
        this.customerNameSource.next(name);
    }

    updateCustomerPhoneNumber(phone: string) {
        this.customerPhoneNumberSource.next(phone);
    }

    updateTotalPrice(totalPrice: number) {
        this.totalPriceSource.next(totalPrice);
    }
}