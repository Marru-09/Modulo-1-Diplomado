import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { BuyFinishedComponent } from './buy-finished/buy-finished.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WishListComponent,
    BuyFinishedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    DataViewModule,
    HttpClientModule,
    OverlayPanelModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
