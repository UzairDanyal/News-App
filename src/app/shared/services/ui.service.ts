import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  searchKeywords: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  updateSearchKeywords(keywords:string[] = []) :void {
    this.searchKeywords.next(keywords);
  }

  getSearchKeywords() : Observable<string[]>{
    return this.searchKeywords.asObservable()
  }
}
