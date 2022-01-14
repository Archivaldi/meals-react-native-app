import React from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";

import CustomHeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
    const mealId = data.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => console.log("Mark as favorite!")} />
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