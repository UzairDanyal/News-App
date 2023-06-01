import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'favourites',
        loadChildren: () =>
          import('../favourite/favourite.module').then((m) => m.FavouriteModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
