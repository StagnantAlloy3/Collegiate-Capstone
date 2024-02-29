import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";


function ManualItemSearch({props}: { props: any }): React.JSX.Element {

    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    let bodyBlock;

    /*useEffect(() => {
        console.log(search);
        const delaySearch = setTimeout(() => {
            console.log(search);
            if (search.length > 1) {
                /!*setItems(ByName(search));*!/
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
    }, [search]);*/

    useEffect(() => {
        const fetchItems = async () => {
            try {
                console.log(search);
                if (search.length > 1) {
                    const response = await fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-name?itemname=${search}`, {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                    });
                    const json = await response.json();
                    setItems(json);
                } else {
                    setItems([]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        const delaySearch = setTimeout(fetchItems, 1000);
        return () => clearTimeout(delaySearch);
    }, [search]);

    // @ts-ignore
    const ListItem = ({title, onClick}) => {
        return (
            <TouchableOpacity onPress={onClick}
                              style={{borderBottomWidth: 1, borderColor: props.colors.border, borderStyle: "solid"}}>
                <View style={{padding: 10, backgroundColor: props.colors.background}}>
                    <Text style={{color: props.colors.text}}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

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
        // @ts-ignore
        bodyBlock = <View>
            <FlatList data={items} renderItem={({item}) => (
                <ListItem
                    //@ts-ignore
                    title={item.description}
                    onClick={() => {
                        // @ts-ignore
                        props.fdc_id = item.fdc_id;
                        // @ts-ignore
                        navigation.navigate('Item Details');
                    }}
                />
            )}/>
        </View>;
    }

    return (
        <View style={{backgroundColor: props.colors.background}}>
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