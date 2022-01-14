
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import Colors from '../constans/Colors';
import { Ionicons } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},  {
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: tabInfo => {
                return <Ionicons name='star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Favorites'
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'ios'
    ? createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.secondaryColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }

        },
    })
    : createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.secondaryColor,
        shifting: true 
    })

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
}, {
    navigationOptions: {
        drawerLabel: "Filters"
    }
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }},
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator);