import { Component } from '@angular/core';
import { AnimePicturesComponent } from '../../components/anime-pictures/anime-pictures.component';
import { AnimeCategoriesComponent } from '../../components/anime-categories/anime-categories.component';

@Component({
  selector: 'app-anime-page',
  standalone: true,
  imports: [
    AnimePicturesComponent,
    AnimeCategoriesComponent
  ],
  templateUrl: './anime-page.component.html',
  styleUrl: './anime-page.component.css'
})
export class AnimePageComponent {

}
