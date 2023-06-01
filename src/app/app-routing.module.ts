import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './shared/components/details/details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/layouts/layouts.module').then(m => m.LayoutsModule)
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
  // {
  //   path: 'favourites',
  //   loadChildren: () => import('../app/favourite/favourite.module').then(m => m.FavouriteModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
