import React from "react";
import {View, StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";


const FavoritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.favoriteMeals)
    
    if (availableMeals.length > 0){
        return (
            <MealList listData={availableMeals} navigation={props.navigation} />
        )
    } else {
        return (
            <View style={styles.content}>
                <DefaultText>No Favorite Meals Found</DefaultText>
            </View>
        )
    }

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
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavoritesScreen;