import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('../app/favourite/favourite.module').then(m => m.FavouriteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
