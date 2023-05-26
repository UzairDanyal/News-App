import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iarticle } from '../../models/article.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() card: Iarticle = null;

  @Output() action: EventEmitter<Iarticle> = new EventEmitter<Iarticle>()

  constructor() {}

  toggleFavorite(article: Iarticle): void {
    this.action.emit(article);
  }


}
