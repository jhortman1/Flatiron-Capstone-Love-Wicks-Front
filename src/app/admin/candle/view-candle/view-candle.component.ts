import { Candle } from 'src/app/Candle';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-candle',
  templateUrl: './view-candle.component.html',
  styleUrls: ['./view-candle.component.css']
})
export class ViewCandleComponent implements OnInit {

  loader = true;

  @Input()
  candle:Candle;
  
  @Output()
  candleDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }

  

  deleteCandle() {
    this.httpClientService.deleteCandle(this.candle.id).subscribe(
      (candle) => {
        this.candleDeletedEvent.emit();
        this.router.navigate(['admin', 'candles']);
      }
    );
  }

  editCandle() {
    this.router.navigate(['admin', 'candles'], { queryParams: { action: 'edit', id: this.candle.id } });
  }
  
}
