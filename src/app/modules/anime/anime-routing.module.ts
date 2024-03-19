import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';

const routes: Routes = [
  {
    path: '',
    component: AnimePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
