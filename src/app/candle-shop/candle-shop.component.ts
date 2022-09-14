import { HttpClientService } from './../service/http-client.service';
import { Candle } from 'src/app/Candle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Order';

@Component({
  selector: 'app-candle-shop',
  templateUrl: './candle-shop.component.html',
  styleUrls: ['./candle-shop.component.css']
})
export class CandleShopComponent implements OnInit {

  candles:Array<Candle>;
  candlesRecieved:Array<Candle>;
  cartCandles: any;
  order:Order;


  constructor(private router: Router, private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getCandles().subscribe(
      response=> this.handleSuccessfulResponse(response)
    );
     let data = localStorage.getItem('cart');
    if(data !== null)
    {
      this.cartCandles = JSON.parse(data);
    }else{
      this.cartCandles = [];
    }
  }

  handleSuccessfulResponse(response:Candle[]) {
    this.candles = new Array<Candle>();
    this.candlesRecieved = response;
    for(const candle of this.candlesRecieved)
    {
      const candleWithImage = new Candle();
      candleWithImage.id = candle.id;
      candleWithImage.description = candle.description;
      candleWithImage.name = candle.name;
      candleWithImage.retrievedImage = 'data:image/jpeg;base64,' + candle.photoId;
      candleWithImage.photoId = candle.photoId;
      candleWithImage.price = candle.price;
      candleWithImage.inStock = candle.inStock;
      this.candles.push(candleWithImage);
    }
  }

  addToCart(candleId : number)
  {
    let candle = this.candles.find(candle => {return candle.id === +candleId;})as Candle;
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null)
    {
      cartData = JSON.parse(data);
    }
    cartData.push(candle);
    this.updateCartData(cartData);
    localStorage.setItem('cart',JSON.stringify(cartData));
    candle.addedToCart = true;
  }

  updateCartData(cartData:any)
  {
    this.cartCandles=cartData;
  }
  sumbitOrder()
  {
    const newOrder = new Order();
    const candleOrder = new Array<number>();
    newOrder.customerId=1;
    newOrder.open=true;
    for(const candle of this.cartCandles)
    {
      candleOrder.push(candle.id);
    }
    newOrder.candles=candleOrder;

    console.log(newOrder);
    this.httpClientService.addOrder(newOrder).subscribe(
      (order)=>{
        this.router.navigate(['shop']);
      }
    )
    this.emptyCart();
  }
  emptyCart()
  {
    this.cartCandles = [];
    localStorage.removeItem('cart');
  }

}
