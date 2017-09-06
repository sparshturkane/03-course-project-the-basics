import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'Dosa',
            'Dosa description',
            'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'
        ),
        new Recipe(
            'Idli',
            'Idli description',
            'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'
        ),
        new Recipe(
            'Biriyani',
            'Biriyani description',
            'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'
        )
    ]

    @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
    constructor() {}

    ngOnInit() {}

    OnRecipeSelected(recipe: Recipe){
        this.recipeWasSelected.emit(recipe);
    }

}

