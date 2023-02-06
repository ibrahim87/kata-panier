import { Article } from './../models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private readonly httpClient: HttpClient) { }

  public getArticle(): Observable<Article> 
  {
    const url: string = '/assets/mocks/data.json';
    return this.httpClient.get<Article>(url);
  }
}
