import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'Recipe Name',
            'Recipe description',
            'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'
        ),
        new Recipe(
            'Recipe Name',
            'Recipe description',
            'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'
        ),
        new Recipe(
            'Recipe Name',
            'Recipe description',
            'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'
        )
    ]
    constructor() {}

    ngOnInit() {}

}

