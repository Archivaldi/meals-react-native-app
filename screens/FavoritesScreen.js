import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";


const FavoritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.favoriteMeals)
    
    return (
        <MealList listData={availableMeals} navigation={props.navigation} />
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