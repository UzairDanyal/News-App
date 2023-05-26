import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  filterKeywords:string[] = [];
  searchInputValue:string = "";

  constructor( private UiService: UiService ) {

  }

  searchFilter(args): void {
    const word = this.searchInputValue
    if(word?.trim().length > 0 && this.filterKeywords.every(e=>e != word)){
        this.filterKeywords.push(word.trim())
        this.searchInputValue = "";
        this.UiService.updateSearchKeywords(this.filterKeywords);

    }
  }

  // remove word from the search items list
  removeFilterKeyWord(word):void{
    this.filterKeywords = this.filterKeywords.filter(w => w !== word);
    this.UiService.updateSearchKeywords(this.filterKeywords)
  }

}
