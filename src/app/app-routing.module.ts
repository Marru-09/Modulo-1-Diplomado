import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BuyFinishedComponent } from './buy-finished/buy-finished.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'wish-list', component: WishListComponent},
  {path: 'buy-finished', component: BuyFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
