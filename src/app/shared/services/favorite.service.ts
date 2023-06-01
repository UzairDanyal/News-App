import { Injectable } from '@angular/core';
import { NewsService } from './news.service';
import { firstValueFrom } from 'rxjs';
import { Iarticle } from '../models/article.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private newsService:NewsService) { }


  toggleFavorite(article: Iarticle) : void {
    
    if(!article?.isFavorite){
        this.addToFavorite(article);
    }else{
        this.removeFromFavorite(article.articleId);
    }
    article.isFavorite = !article.isFavorite

  }

  addToFavorite(article:Iarticle): void {
    article  = {...article, isFavorite: true};
    firstValueFrom(this.newsService.addToFavoriteById(article.articleId)).then(response => {
 
    })

    firstValueFrom(this.newsService.addToFavorite(article)).then(response => {
        // let art = this.articles.find(e => e.articleId === article.articleId);
        // art.isFavorite = true;
    })
  }

  removeFromFavorite(articleId:string):void { 
    firstValueFrom(this.newsService.removeFavoriteById(articleId)).then(response => {
        // const arti = this.articles.find(e => e.articleId === articleId);
        // arti.isFavorite = false;
    })
  }

  
}
