import { Component, OnInit } from '@angular/core';
import { Candle } from 'src/app/Candle';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {

  candles: Array<Candle>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getCandles().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response : Candle[]) {
    this.candles = response;
  }

  setCandle(id:number)
  {
    return null;
  }
}
