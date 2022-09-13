import { Component, OnInit } from '@angular/core';
import { Candle } from 'src/app/Candle';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {

  candles: Array<Candle>;
  candlesRecieved: Array<Candle>;
  selectedCandle: Candle;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.httpClientService.getCandles().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }

  refreshData() {
    this.httpClientService.getCandles().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
	      const selectedCandleId = params['id'];
        if (selectedCandleId) {
          console.log(selectedCandleId);
          this.selectedCandle = this.candles.find(candle => candle.id === +selectedCandleId ) as Candle;
        }
      }
    );
  }

  handleSuccessfulResponse(response : Candle[]) {
    this.candles = new Array<Candle>();
    this.candlesRecieved = response;
    for(const candle of this.candlesRecieved)
    {
        const candleWithimage = new Candle();
        candleWithimage.id = candle.id;
        candleWithimage.name=candle.name;
        candleWithimage.description=candle.description;
        candleWithimage.price=candle.price;
        candleWithimage.retrievedImage='data:image/jpeg;base64,' + candle.photoId;
        candleWithimage.photoId=candle.photoId;
        candleWithimage.inStock=candle.inStock;
        this.candles.push(candleWithimage);
     }
  }

  addCandle() {
    this.selectedCandle = new Candle();
    this.router.navigate(['admin', 'candles'], { queryParams: { action: 'add' } });
  }

  viewCandle(id: number) {
    this.router.navigate(['admin', 'candles'], { queryParams: { id, action: 'view' } });
    this.selectedCandle = this.candles.find(candle => candle.id === +id ) as Candle;
  }
}
