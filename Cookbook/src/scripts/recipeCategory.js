//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    function RecipeCategory(recipeCategory) {
        _super.call(this, recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
    return RecipeCategory;
}(BaseRecipeCategory));
//# sourceMappingURL=recipeCategory.js.map