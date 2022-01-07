class Meal {
    constructor(id, categoryId, title, affordability, complexity, imageUrl, ingridients, steps, isGlutenFree, isVegan, isVegeterian, isLactoseFree){
        this.id = id,
        this.categoryId = categoryId,
        this.itle = title,
        this.affordability = affordability,
        this.complexity = complexity,
        this.imageUrl = imageUrl,
        this.ingridients = ingridients,
        this.steps = steps,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isVegeterian = isVegeterian,
        this.isLactoseFree = isLactoseFree

    }
};

export default Meal;