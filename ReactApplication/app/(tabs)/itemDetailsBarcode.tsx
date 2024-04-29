import {View, Text, StyleSheet} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";

/**
 * TODO: Change the URL for this action!
 * @constructor
 */

export default function Modal() {

    const props = useLocalSearchParams();
    const [item, setItem] = useState({
        brand_owner: undefined,
        branded_food_category: undefined,
        modified_date: undefined,
        ingredients: undefined
    });

    console.log("passedData: " + props.fdcID);

    useEffect(() => {
        /*const fetchData = async () => {
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
        fetchData();*/


        console.log(props.fdcID);
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-barcode?barcode=${props.barcode}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const json = await response.json();
                console.log(json);
                setItem(json);
            } catch (error) {
                console.error(error);
                return error;
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.brandOwner}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Brand: <Text style={styles.text}>{item.brand_owner}</Text></Text>
            </View>
            <View style={styles.ingredients}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Ingredients: <Text style={styles.text}>{item.ingredients}</Text></Text>
            </View>
            <View style={styles.date}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Last Modified:<Text style={styles.text}>{item.modified_date}</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'center'
    },
    brandOwner: {
        height: "10%"
    },
    ingredients: {
        height: "80%",
    },
    date: {
        height: "10%"
    },

    camera: {
        width: '100%',
        height: '66%',
        borderRadius: 2,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ADD8E6',
        margin: 32,
        borderRadius: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ADD8E6',
    },
});

