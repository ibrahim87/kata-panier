import { CartService } from './../../../features/cart/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalCart!: number;

  constructor(private readonly cartService : CartService){}

  public ngOnInit(): void {
    setInterval(() => {
    this.totalCart = this.cartService.getCartCount();
    },200);
  }
}
