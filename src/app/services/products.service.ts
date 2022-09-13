import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  public getProducts():Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8080/product/getAllProduct")
  }
}
