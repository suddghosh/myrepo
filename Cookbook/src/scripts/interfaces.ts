module RecipeInterfaces {
    
    export interface IBaseRecipeCategory {
        name:string;
        foodGroups:FoodGroup[];
    }
    
    export interface IRecipeCategory extends IBaseRecipeCategory {
        description:string;
        examples:OtherCookbookInterfaces.IExample[];
    }

    export interface IRecipeData {
        recipeCategories?: RecipeCategories<RecipeCategory>;
        recipeCategoriesSummary?: RecipeCategories<IRecipeCategorySummary>;
    }
    
    export interface IRecipeCategorySummary {
        text: string;
        title: string;
    }
}

module OtherCookbookInterfaces {
    export interface IFoodGroup {
        name: string;
    }

    export interface IExample {
        name: string;
        ingredients: Ingredient[];
        prepTime: string;
    }

    export interface IIngredient {
        name: string;
    }
}

