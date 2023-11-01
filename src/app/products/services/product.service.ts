import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../products.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private readonly http: HttpClient ) { }

  getData() {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
