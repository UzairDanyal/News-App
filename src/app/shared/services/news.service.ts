import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, throwError } from 'rxjs';
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
      if(!storage.some(e=>e.articleId == article.articleId)){
        storage.push(article);
        localStorage.setItem('articles', JSON.stringify(storage));
      }

    }else{
      localStorage.setItem('articles', JSON.stringify([article]));
    }

    return of('Article Added to Favorite Successfully');
  }


  addToFavoriteById(articleId: string) {
    const storage = JSON.parse(localStorage.getItem('articlesId'));
    if(storage) {
      if(!storage.some(e=>e == articleId)){
        storage.push(articleId);
        localStorage.setItem('articlesId', JSON.stringify(storage));
      }
    }else{
      localStorage.setItem('articlesId', JSON.stringify([articleId]));
    }

    return of('Article Added to Favorite Successfully');
  }

  removeFavoriteById(articleId: string) {
    try{
      let articles = JSON.parse(localStorage.getItem('articles'));
      let articlesId = JSON.parse(localStorage.getItem('articlesId'));
      if(articles) {
        articles = articles.filter(article => article.articleId !== articleId);
        articlesId = articles.filter(id => id !== articleId);
        localStorage.setItem('articles', JSON.stringify(articles));
        localStorage.setItem('articlesId', JSON.stringify(articles));
      }
      return of('Article Removed from Favorite Successfully');
    }catch(error){
      return of('Server Error: clear local storage.');
    }

  }

  getArticleByArticleId(articleId:string):Observable<Iarticle> {
    let storage = null;
    try {
      storage = JSON.parse(localStorage.getItem('selectedArticle'));
      if(!storage) {
      throw new Error(('Server Error: clear local storage.'));
      }
    }catch(error){
      throw new Error(('Server Error: clear local storage.'));
    }
  
    return of(storage);
  }

  navigateToArticle(article:Iarticle): void {
     localStorage.setItem('selectedArticle', JSON.stringify(article));
  }

  
}
