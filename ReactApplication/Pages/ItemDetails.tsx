import React, {useEffect} from 'react';
import {Text, View} from "react-native";

export function ItemDetails({props}: { props: any }) {

    useEffect(() => {
        fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-id?fdc_id=${props.fdc_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response => response.json()))
            .then((json) => {
                console.log(json);
            }).catch((error) => {
            console.error(error);
            return error;
        });
    }, []);

    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <Text>Details Screen</Text>
            <Text>Item clicked was: {props.fdc_id}</Text>
        </View>
    );
}