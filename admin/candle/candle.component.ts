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
      }
    );
  }

  handleSuccessfulResponse(response : Candle[]) {
    this.candles = response;
  }

  addCandle() {
    this.selectedCandle = new Candle();
    this.router.navigate(['admin', 'candles'], { queryParams: { action: 'add' } });
  }

  setCandle(id:number)
  {
    return null;
  }
}
