import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-finished',
  templateUrl: './buy-finished.component.html',
  styleUrls: ['./buy-finished.component.scss']
})
export class BuyFinishedComponent {
  constructor(
    private  readonly route: Router
  ) {}

  backCommerce () {
    this.route.navigateByUrl ("/products")
  }
}
