import { Component, Input } from '@angular/core';
import { Iarticle } from '../../models/article.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() card: Iarticle = null;
  constructor() {}
  
}
