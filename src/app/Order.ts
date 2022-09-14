import { Candle } from 'src/app/Candle';
export class Order {
    orderId:number;
    customerId:number;
    open:boolean;
    candles:Array<number>;
}