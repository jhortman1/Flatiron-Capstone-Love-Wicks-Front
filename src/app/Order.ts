import { Candle } from 'src/app/Candle';
export class Order {
    id:number;
    customerId:number;
    open:boolean;
    candles:Array<number>;
}