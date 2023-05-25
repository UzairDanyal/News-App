import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
}
