import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";

function ManualItemSearch({props}: { props: any }): React.JSX.Element {

    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    let bodyBlock;

    useEffect(() => {
        console.log(search);
        const delaySearch = setTimeout(() => {
            console.log(search);
            if (search.length > 1) {
                /*setItems(ByName(search));*/
                fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-name?itemname=${search}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).then((response => response.json()))
                    .then((json) => {
                        setItems(json);
                    }).catch((error) => {
                    console.error(error);
                    return error;
                });
            } else {
                setItems([]);
            }
        }, 1000);
        return () => clearTimeout(delaySearch);
    }, [search]);

    /*const ListItem = ({title, onClick}) => {
        return (
            <TouchableOpacity onPress={onClick}
                              style={{borderBottomWidth: 1, borderColor: props.colors.border, borderStyle: "solid"}}>
                <View style={{padding: 10, backgroundColor: props.colors.background}}>
                    <Text style={{color: props.colors.text}}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }*/

    if (items.length == 0) {
        bodyBlock = <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.colors.background,
            height: "100%"
        }}>
            <Text>No Items Found</Text>
        </View>;
    } else {
        bodyBlock = <View>
            <FlatList data={items} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate("ItemDetails", {screen: 'ItemDetails', params: {item: item}}) }
                                  style={{borderBottomWidth: 1, borderColor: props.colors.border, borderStyle: "solid"}}>
                    <View style={{padding: 10, backgroundColor: props.colors.background}}>
                        <Text style={{color: props.colors.text}}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            )}/>
        </View>;
    }

    return (
        <View style={{backgroundColor: props.colors.background}}>
            <Text style={{color: props.colors.text, textAlign: "center"}}>Manual Item Search</Text>
            <View style={{backgroundColor: props.colors.background}}>
                <TextInput placeholder="Item Name" onChangeText={text => setSearch(text)}
                           style={{
                               borderColor: props.colors.border,
                               borderStyle: 'solid',
                               borderWidth: 1,
                               color: props.colors.text
                           }} placeholderTextColor={props.colors.text}/>
            </View>
            {bodyBlock}
        </View>
    );
}

export default ManualItemSearch;