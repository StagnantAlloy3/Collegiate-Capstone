import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";

/**TODO
 * 1. Figure out a better layout.
 * 3. (General Comment) - Start a centralized stylesheet for the app.
 */

/*
 * Item details component. This page will be returned whenever an item is searched from either the Manual Item Search or
 * the Barcode Scanner.
 * @param props
 * @constructor
*/

export function ItemDetails({props}: { props: any }) {

    const [item, setItem] = React.useState({
        brand_owner: undefined,
        branded_food_category: undefined,
        modified_date: undefined,
        ingredients: undefined
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching Data" + " " + props.fdc_id);
            try{
             setItem({
                 brand_owner: undefined,
                 branded_food_category: undefined,
                 ingredients: undefined,
                 modified_date: undefined
             });
                const response = await fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-id?fdc_id=${props.fdc_id}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
            });
                const json = await response.json();
                setItem(json);
                console.log(json);
            } catch (error) {
                console.error(error);
                return error;
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView style={[styles.container, {flexDirection: 'column', backgroundColor: props.colors.background}]}>
            <View style={[styles.container, {flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Brand:</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}}>{item.brand_owner}</Text>
                </View>
            </View>

            <View style={[styles.container, {flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Category:</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}}>{item.branded_food_category}</Text>
                </View>
            </View>

            <View style={{padding: 8}}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Ingredients:</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}}>{item.ingredients}</Text>
                </View>
            </View>
            <View style={[styles.container, {flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Last Updated:</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}}>{item.modified_date}</Text>
                </View>
            </View>
        </ScrollView>
    );
}