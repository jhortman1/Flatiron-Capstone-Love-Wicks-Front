import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Order';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Array<Order>;
  selectedOrder: Order;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.httpClientService.getOrders().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
 }

  handleSuccessfulResponse(response: Order[]) {
    this.orders = response;
  }
  handleSuccessfulResponseById(response: Order) {

    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedOrderId = params['orderId'];
        if (selectedOrderId) {
          this.selectedOrder = response;
        }
      }
    );
  }

  vieworder(orderId:number)
  {
    this.httpClientService.getOrdersById(orderId).subscribe(
      response => this.handleSuccessfulResponseById(response)
    );
    this.router.navigate(['admin','orders'], {queryParams : {orderId, action: 'view'}});
  }

}
