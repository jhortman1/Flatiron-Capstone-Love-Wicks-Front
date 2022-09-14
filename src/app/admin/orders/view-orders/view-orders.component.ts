import { Order } from './../../../Order';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  @Input()
  selectedOrder: Order

  candles:Array<number>;

  @Output()
  orderDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {
    this.candles = this.selectedOrder.candles;
  }
  deleteOrder() {
    this.httpClientService.deleteOrder(this.selectedOrder.orderId).subscribe(
      (Order) => {
        this.orderDeletedEvent.emit();
        this.router.navigate(['admin', 'orders']);
      }
    );
  }

}
