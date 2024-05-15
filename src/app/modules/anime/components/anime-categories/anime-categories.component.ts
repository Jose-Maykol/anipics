import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anime-categories',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './anime-categories.component.html',
  styleUrl: './anime-categories.component.css'
})
export class AnimeCategoriesComponent {
  public animeCategories = [
    {
      id: 1,
      name: 'neko'
    },
    {
      id: 2,
      name: 'waifu'
    },
    {
      id: 3,
      name: 'husbando'
    },
    {
      id: 4,
      name: 'kitsune'
    }
  ];
}
