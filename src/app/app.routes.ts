import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/anime/anime.module').then(m => m.AnimeModule)
  },
];
