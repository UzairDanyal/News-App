import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iarticle } from 'src/app/shared/models/article.interface';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { NewsService } from 'src/app/shared/services/news.service';
import { getUniqueString } from 'src/app/shared/utils/unique.util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  articles: Iarticle[] | any = [];
  constructor( private newsService:NewsService, private favoriteService: FavoriteService){

  }
  ngOnInit() : void {
    this.getList();
  }

  // get latest news list from server

  getList():void {
    const isExistInFav = (id) => {
        const articlesId = localStorage.getItem('articlesId');
        if (articlesId && articlesId.length > 0 && articlesId?.includes(id)) {
            return true;
        }
        return false;
    }

    firstValueFrom(this.newsService.getLatestNews()).then((response: Iarticle[]) => {
      this.articles = response.map((article:Iarticle)=> {
            const uniqueId = article.publishedAt + article.title
            return {...article, articleId: uniqueId , isFavorite: isExistInFav(uniqueId)}
      });
    }).catch(error=>{
      console.log(error);
    })
  }

  toggleFavorite(article: Iarticle) : void {
    this.favoriteService.toggleFavorite(article)
  }

}
