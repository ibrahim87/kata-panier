import { CartService } from './../../../cart/services/cart.service';
import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  constructor(private readonly cartService: CartService) {}

   @Input() public data: any[]=[];
   @Input() public field!:string;
   @Input() public value!:string;

 
  handelAddToCart(product:Article): void {
    this.cartService.addItemsToCart(product);
  }


  public getData() 
  {
    return this.data.filter((item:any) => {
      return item[this.field] == this.value;
    })
  }

}
