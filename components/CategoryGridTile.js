import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
const CategoryGridTile = props => {
    let TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <View style={{flex:1}}>
            <TouchableComp style={styles.gridItem} onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor: props.color}}} >
                <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
            </View>
        </TouchableComp>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    }
});

export default CategoryGridTile;