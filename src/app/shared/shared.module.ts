import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
@NgModule({
  declarations: [
    NewsCardComponent,
    ListComponent,
    SearchComponent,
    SearchPipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    NewsCardComponent,
    ListComponent,
    SearchComponent,
    FormsModule,
    SearchPipe,
    TimeAgoPipe
  ]

})
export class SharedModule { }
