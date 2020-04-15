import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'Test Recipe',
      'Test descr',
      'https://live.staticflickr.com/1962/45044003872_0101f256eb_b.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
