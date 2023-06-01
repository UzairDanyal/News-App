import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iarticle } from '../../models/article.interface';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() card: Iarticle = null;

  @Output() action: EventEmitter<Iarticle> = new EventEmitter<Iarticle>()

  constructor(private router: Router, private newService: NewsService) {
  
  }

  toggleFavorite(article: Iarticle): void {
    this.action.emit(article);
  }

  navigateToArticle(article:Iarticle) : void {
    this.newService.navigateToArticle(article);
    this.router.navigateByUrl(`/details/${article.articleId}`);
  }


}
