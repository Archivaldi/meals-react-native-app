import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";


const FavoritesScreen = props => {
    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
        <MealList listData={favoriteMeals} navigation={props.navigation} />
    )
};

FavoritesScreen.navigationOptions = (data) => {
    return {
        headerTitle: "Your Favorites",
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item iconName="ios-menu" title="Menu" onPress={() => {
                        data.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
            )
        }
    }
}

export default FavoritesScreen;