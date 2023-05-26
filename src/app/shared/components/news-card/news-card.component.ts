import { Component, Input } from '@angular/core';
import { Iarticle } from '../../models/article.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() card: Iarticle = null;

  constructor(private newsService: NewsService) {}

  addToFavorite(article: Iarticle): void {
    this.newsService.addToFavorite(article);
  }
  removeArticle(article:Iarticle): void {
  }
}
