import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl : './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService:ProductsService) { }
  products:Array<Product>=[]
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(productsArray=>this.products=productsArray)
    console.log(this.products)

  }
}