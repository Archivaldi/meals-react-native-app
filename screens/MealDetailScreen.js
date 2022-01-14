import React, {useEffect, useCallback} from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import {toggleFavorite} from '../store/actions/meals';

import CustomHeaderButton from "../components/HeaderButton";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");

    const availableMeals = useSelector(state => state.meals.meals);

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const isFavorite = favoriteMeals.some(meal => meal.id === mealId);


    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFavorite})
    }, [isFavorite])

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingridients</Text>
            {selectedMeal.ingridients.map((ing, index) => <ListItem key={index}>{ing}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step, index) => <ListItem key={index}>{step}</ListItem>)}
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = (data) => {
    const mealTitle = data.navigation.getParam("mealTitle");
    const toggleFavorite = data.navigation.getParam('toggleFav');
    const isFavorite = data.navigation.getParam('isFavorite');

    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Favorite' 
                iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
                onPress={toggleFavorite} />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 3.2
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;