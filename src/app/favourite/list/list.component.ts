import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iarticle } from 'src/app/shared/models/article.interface';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{


  favouriteList: Iarticle[] = [];
  constructor(private newsService: NewsService) {

  }

  ngOnInit(): void {
    this.getFavouritesList();
  }

  getFavouritesList(): void { 
    this.newsService.getFavoriteArticles().subscribe(data => {
      this.favouriteList = data;
    })
  }

  removeFromFavorite(article:Iarticle):void { 
    firstValueFrom(this.newsService.removeFavoriteById(article.articleId)).then(response => {
         this.favouriteList = this.favouriteList.filter(e => e.articleId != article.articleId);
    })
  }

}
