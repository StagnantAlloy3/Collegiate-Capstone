import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View} from "react-native";
import {List} from "react-native-paper";


function ManualItemSearch({props}: { props: any }): React.JSX.Element {


    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);


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
            }
            else {
                setItems([]);
            }
        }, 1000);
        return () => clearTimeout(delaySearch);
    }, [search]);

    return (
        <View>
            <View style={{backgroundColor: props.colors.background}}>
                <TextInput placeholder="Item Name" onChangeText={text => setSearch(text)}
                           style={{borderColor: props.colors.border, borderStyle: 'solid', borderWidth: 1, color: props.colors.text}}/>
            </View>
            <FlatList data={items} renderItem={({item}) => (
                <List.Item
                    title={item.description}
                    onPress={() => console.log(item)}
                    style={{ borderBottomColor: props.colors.border, borderBottomWidth: 1 }}
                />
            )}/>
        </View>
    );
}

export default ManualItemSearch;