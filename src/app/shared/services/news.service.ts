import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Iarticle } from '../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  Url: string =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cccfdd6547b54b72b3657c4c38ef08cb';
  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<Iarticle[]> {
    return this.http
      .get(this.Url)
      .pipe(map((res: { [key: string]: any }) => res['articles']));
  }

  getFavoriteArticles(): Observable<Iarticle[]> {
    let articles = []
    const storage = JSON.parse(localStorage.getItem('articles'));
    if(storage && storage.length > 0) {
      articles = storage;
    }
    return of(articles);
  }


  addToFavorite(article: Iarticle) {
    const storage = JSON.parse(localStorage.getItem('articles'));
    if(storage) {
      storage.push(article);
      localStorage.setItem('articles', JSON.stringify(storage));
    }else{
      localStorage.setItem('articles', JSON.stringify([article]));
    }
  }
}
