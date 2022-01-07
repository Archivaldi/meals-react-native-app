import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constans/Colors";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Details" onPress={() => {props.navigation.navigate("MealDetail")}} />
            <Button title='Go Back' onPress={() => {props.navigation.goBack()}}/>
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