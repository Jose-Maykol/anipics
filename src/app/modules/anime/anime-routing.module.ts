import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePicturesComponent } from './components/anime-pictures/anime-pictures.component';

const routes: Routes = [
  {
    path: '',
    component: AnimePicturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
