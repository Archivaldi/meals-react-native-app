import React from "react";
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealList = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return (
           <MealItem onSelectMeal={() => props.navigation.navigate({
               routeName: "MealDetail",
               params: {
                   mealId: itemData.item.id,
                   mealTitle: itemData.item.title,
                   isFavorite
               }
           })} data={itemData.item} />
        );
    };
    return (
        <View style={styles.list}>
            <FlatList style={{ width: "100%" }}
                data={props.listData}
                renderItem={renderMealItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;