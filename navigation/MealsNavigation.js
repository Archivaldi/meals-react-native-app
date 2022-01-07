
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import Colors from '../constans/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);