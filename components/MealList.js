import React from "react";
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from "./MealItem";

const MealList = (props) => {
    const renderMealItem = itemData => {

        return (
           <MealItem onSelectMeal={() => props.navigation.navigate({
               routeName: "MealDetail",
               params: {
                   mealId: itemData.item.id
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