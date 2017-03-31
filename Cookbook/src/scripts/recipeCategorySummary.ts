class RecipeCategorySummary implements RecipeInterfaces.IRecipeCategorySummary {
    text:string;
    title:string;

    constructor(summary:RecipeInterfaces.IRecipeCategorySummary) {
        this.text = summary.text;
        this.title = summary.title;
    }
}