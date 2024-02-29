import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";

/**TODO
 * 1. Figure out a better layout.
 * 2. Add jsDoc comments.
 * 3. (General Comment) - Start a centralized stylesheet for the app.
 */

export function ItemDetails({props}: { props: any }) {

    const [item, setItem] = React.useState({});

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        }
    });

    /*useEffect(() => {
        setItem({});
        fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-id?fdc_id=${props.fdc_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response => response.json()))
            .then((json) => {
                console.log(json);
                setItem(json);
            })
            .catch((error) => {
                console.error(error);
                return error;
            });
    }, []);*/

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching Data" + " " + props.fdc_id);
            try{
             setItem({});
                const response = await fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-id?fdc_id=${props.fdc_id}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
            });
                const json = await response.json();
                setItem(json);
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