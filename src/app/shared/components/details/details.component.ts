import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Iarticle } from 'src/app/shared/models/article.interface';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  article: Iarticle = null;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];
    this.getArticle(id);
  }

  getArticle(articleId: string): void {

    try {
      firstValueFrom(this.newsService.getArticleByArticleId(articleId))
      .then((article) => {
        this.article = article;
      })
    }catch(error){
    }

  }

  toggleFavorite() : void {
    this.favoriteService.toggleFavorite(this.article)
  }
}
