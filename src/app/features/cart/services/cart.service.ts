import { Article } from './../../articles/models/article';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Article[] = [];
  totalAmount :any;

  constructor(private router: Router) { }

  addItemsToCart = (product: Article) => {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: 1,
        mainImageUrl: product.mainImageUrl,
        isImported: true,
        category: product.category
      });
    }
    this.getTotalAmount();
  }

   getTotalAmount():any {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * item.price);
      });
      return {
        totalAmount: this.totalAmount
      };
    }
  }

  getItemsFromCart(): Article[] {
    return this.cartItems;
  }
  getCartCount():number | any {
    if (this.cartItems) {
      let cartCount = 0;
      this.cartItems.forEach((item) => {
        cartCount += item.quantity;
      });
      return cartCount;
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.router.navigate(['']);
  }

  removeFromCart(product:Article) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['/']);
    }
    this.getTotalAmount();
  }

  decrementFromCart(product:Article): void {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (this.cartItems[i].quantity === 0) {
          console.log(this.cartItems[i].quantity)
          this.removeFromCart(product);
        } else {
          console.log(this.cartItems[i].quantity--)
          this.cartItems[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
  }
}
