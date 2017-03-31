//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface

class RecipeCategory extends BaseRecipeCategory implements RecipeInterfaces.IRecipeCategory {
    description:string;
    examples:OtherCookbookInterfaces.IExample[];
    
    constructor(recipeCategory:RecipeInterfaces.IRecipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
}
