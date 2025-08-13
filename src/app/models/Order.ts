import ICustomer from "./Customer";
import ILemonade from "./Lemonade";
import ILemonadeStand from "./LemonadeStand";

export default interface IOrder {
    id?: number,
    customer: ICustomer,
    lemonades: ILemonade[],
    lemonadeStand: ILemonadeStand,
    total?: number
}