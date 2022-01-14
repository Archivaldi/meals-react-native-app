import React from "react";
import { useSelector } from 'react-redux';
import { View, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryId.indexOf(catId) >= 0);

    if (displayedMeals.length === 0){
        return (
            <View style={styles.container}>
                <DefaultText>No meals found. Check you filters?</DefaultText>
            </View>
        )
    }

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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;