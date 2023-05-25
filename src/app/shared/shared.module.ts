import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    NewsCardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NewsCardComponent,
    ListComponent
  ]

})
export class SharedModule { }
