import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    SharedModule
  ]
})
export class FavouriteModule { }
