import React from "react";
import {View, Text,FlatList, StyleSheet} from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Colors from "../constans/Colors";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);

    const renderMealItem = itemData => {

        return (
           <MealItem onSelectMeal={() => props.navigation.navigate({
               routeName: "MealDetail",
               params: {
                   mealId: itemData.item.id
               }
           })} data={itemData.item} />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList style={{width: "100%"}} data={displayedMeals} renderItem={renderMealItem}/>
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (data) => {
    const catId = data.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;