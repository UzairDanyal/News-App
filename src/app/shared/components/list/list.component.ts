import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iarticle } from '../../models/article.interface';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  @Input() list: Iarticle[]=[];

  @Output() action: EventEmitter<Iarticle> = new EventEmitter<Iarticle>()

  filterKeywords:string[] = [];
  constructor( private uiService: UiService) {}


  ngOnInit(): void {
    this.subscribeSearch();
  }

  subscribeSearch():void {
    this.uiService.getSearchKeywords().subscribe(words => {
      this.filterKeywords = words;
    })
  }

  emitAction(article:Iarticle): void {
    this.action.emit(article);
  }


  



}
