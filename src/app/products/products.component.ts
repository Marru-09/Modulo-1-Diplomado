import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  cantidad2: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductCart extends Producto {
  cantidad: number
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  value3: any = 0;
  productos: Producto[] = [];
  cart: ProductCart[] = [];
  visibleCart: boolean = false;
  total: number = 0

  constructor(
    private readonly productService: ProductService,
    private  readonly route: Router
  ) {}
  ngOnInit(): void {
    this.productService.getData().subscribe((resp) => {
      console.log(resp);
      this.productos = resp;
    });
    console.log(this.route);
  }
 public addToCart(product: Producto) : any {
    const index = this.cart.findIndex((prd) => product.id == prd.id);
    if (index == -1) return this.cart = [...this.cart, { ...product, cantidad: 0 }];
  }

  public chageCart(value: number, product:Producto): void {
    const index = this.cart.findIndex((prd) => product.id == prd.id);
    console.log({
      value, product, index
    })
    if (index == -1) {this.cart = [...this.cart, { ...product, cantidad: value ?? 0 }]
      return;
    }; 
    this.cart[index].cantidad = value
  }

showDialog() {
    this.visibleCart = true;
    this.cart.forEach(element => {
     const subtotal = element.price * element.cantidad
     this.total += subtotal
    });
  }

showStore() {
    this.route.navigateByUrl ("/buy-finished")
  }
}
