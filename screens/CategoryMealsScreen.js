import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);


    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation}
        />
    )
};

CategoryMealsScreen.navigationOptions = (data) => {
    const catId = data.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealsScreen;