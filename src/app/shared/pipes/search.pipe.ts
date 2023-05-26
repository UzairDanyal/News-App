import { Pipe, PipeTransform } from '@angular/core';
import { Iarticle } from '../models/article.interface';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(articles: Iarticle[], keywords: string[] = []) : Iarticle[] {
    if(keywords.length === 0) {
      return articles;
    }else {
      const result =  articles.filter(article =>
        keywords.some(keyword =>
          article?.title?.includes(keyword) || article?.description?.includes(keyword)
        )
      );
      return result 
    }
  }

}
