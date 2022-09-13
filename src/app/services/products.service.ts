import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';
import { JwtUserAuthService } from './jwt-user-auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient,private jwtUserAuth:JwtUserAuthService) { 

  }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': this.jwtUserAuth.getAuthenticatedToken()})
  };
  public getProducts():Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8080/product/getAllProduct",this.httpOptions)
  }
}
