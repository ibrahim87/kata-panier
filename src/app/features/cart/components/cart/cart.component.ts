import { Article } from './../../../articles/models/article';
import { CartService } from './../../services/cart.service';
import { Component, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public displayedColumns: string[] = ['produit', 'qte','Importe', 'taxes', 'prixHt','prixTtC', 'Action'];
  public dataSource: MatTableDataSource<Article>;
  public cartItems: Article[]= [];
  public cartTotalValue: any;
  public prods;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cartService: CartService, private changeDetectorRefs: ChangeDetectorRef) { 
    this.cartItems = this.cartService.getItemsFromCart();
    this.prods = this.cartService.getCartCount();
    this.dataSource = new MatTableDataSource(this.cartItems);
    
  }

  ngOnInit(): void {
    setInterval(() => {
      this.prods = this.cartService.getCartCount();
      // console.log(this.prods, 'prods')
    }, 200);
  }

  ngAfterViewInit() : void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handelRemoveItem(article: Article) : void{
    this.cartService.removeFromCart(article);
    this.cartItems = this.cartService.getItemsFromCart();
    this.cartTotalValue =  this.cartService.getTotalAmount();
    console.log(this.cartItems)
    console.log(this.cartTotalValue)
    this.changeDetectorRefs.detectChanges();
  }

  handleIncrement(article: Article) : void {
    this.cartService.addItemsToCart(article);
    this.cartItems = this.cartService.getItemsFromCart();
    this.cartTotalValue =  this.cartService.getTotalAmount();
  }

  handleDecriment(article: Article): void{
    this.cartService.decrementFromCart(article);
    this.cartItems = this.cartService.getItemsFromCart();
    this.cartTotalValue =  this.cartService.getTotalAmount();
  }
}
