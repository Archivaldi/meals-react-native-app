import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import Colors from "../constans/Colors";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            />
        </View>
    )
}


const FiltersScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label="Vegeterian" state={isVegeterian} onChange={newValue => setIsVegeterian(newValue)} />
        </View>
    )
};


FiltersScreen.navigationOptions = (data) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item iconName="ios-menu" title="Menu" onPress={() => {
                        data.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item iconName="ios-save" title="Save" onPress={() => {
                        console.log("Saved")
                    }} />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginVertical: 10
    }
});

export default FiltersScreen;