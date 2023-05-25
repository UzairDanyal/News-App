import { Component, Input } from '@angular/core';
import { Iarticle } from '../../models/article.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() list: Iarticle[]=[];
  constructor() {}

}
