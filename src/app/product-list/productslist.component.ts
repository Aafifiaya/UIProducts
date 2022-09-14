import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../models/Product.model';
import { JwtUserAuthService } from '../services/jwt-user-auth-service.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl : './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService:ProductsService,private jwtUserAuth:JwtUserAuthService) { }
  products:Array<Product>=[]
  displayedColumns: string[] = ['No', 'Name', 'Price','view','edit','delete'];
  dataSource:MatTableDataSource<Product>=new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) matPaginator !:MatPaginator;
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(productsArray=>{
      this.products=productsArray
      this.dataSource=new MatTableDataSource<Product>(this.products);
    })
    console.log(this.products)
    console.log(this.jwtUserAuth.getAuthenticatedToken())

  }
}