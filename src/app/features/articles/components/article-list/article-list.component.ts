import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{

  public articles:any;
  public articlesFiltred!:Article[];
  public selectedValue:any;
  public fields!: string
  public value: string="tt";
  public field!: string;
  selectedStates: any = [];

  constructor(private readonly articleService: ArticleService)
{
}

public ngOnInit(): void {
  this.articleService.getArticle().pipe(tap( response => {
    this.articles= response;
    this.field = this.articles[0];
  })).subscribe();
}


// public searchArticle(searchValue: any): void {
//  return this.articles.filter((article: Article) => {
//      article.id === searchValue.value.id;
//   });
// }
}
