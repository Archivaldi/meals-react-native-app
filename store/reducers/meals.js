import {MEALS} from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0){
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavMeals}
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS: 
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.isGlutenFree && !meal.isGlutenFree){
                    return false;
                } else if (appliedFilters.isLactoseFree && !meal.isLactoseFree){
                    return false;
                } else if (appliedFilters.isVegeterian && !meal.isVegeterian){
                    return false;
                } else if (appliedFilters.isVegan && !meal.isVegan){
                    return false;
                } else {
                    return true;
                }
            });
            return {...state, filteredMeals}
        default: 
            return state
    }
    return state;
};

export default mealsReducer;