import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { AnimeCategoryPageComponent } from './pages/anime-category-page/anime-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: AnimePageComponent
  },
  {
    path: ':category',
    component: AnimeCategoryPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
