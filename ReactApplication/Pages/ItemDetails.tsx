import React from 'react';
import {Text, View} from "react-native";

export function ItemDetails({props} : {props: any}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <Text>Details Screen</Text>
        </View>
    );
}