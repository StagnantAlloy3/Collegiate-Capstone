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

    useEffect(() => {
        setItem({});
        fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-id?fdc_id=${props.fdc_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response => response.json()))
            .then((json) => {
                console.log(json);
                setItem(json);
            }).catch((error) => {
            console.error(error);
            return error;
        });
    }, []);

    return (
        <View style={[styles.container, {flexDirection: 'column', backgroundColor: props.colors.background}]}>
            {/*<Text>Item clicked was: {props.fdc_id}</Text>*/}
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

            <ScrollView>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Ingredients:</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}}>{item.ingredients}</Text>
                </View>
            </ScrollView>

            <View style={[styles.container, {flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Last Updated:</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}}>{item.modified_date}</Text>
                </View>
            </View>
        </View>
    );
}