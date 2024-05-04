import {View, Text, TextInput, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {useEffect, useState} from "react";
import FlatList = Animated.FlatList;
import {useRouter} from "expo-router";

export default function Tab() {

    const [search, setSearch] = useState('');
    const [items, setItems] = useState([{
        description: '',
        fdc_id: 0
    }]);
    const router = useRouter();

    let bodyBlock;

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
                    console.log(json);
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

    const ListItem = ({title, onClick}) => {
        return (
            <TouchableOpacity onPress={onClick}
                              style={styles.listItem}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    if (items.length == 0) {
        bodyBlock = <View style={styles.bottomContainerError}>
            <Text style={styles.text}>No Items Found</Text>
        </View>;
    } else {
        bodyBlock = <View style={styles.bottomContainerResults}>
            <FlatList data={items} renderItem={({item}) => (
                <ListItem
                    title={item.description}
                    onClick={() => {
                        console.log(item.fdc_id);
                        router.navigate({pathname: 'itemDetailsManual', params: {fdc_id: item.fdc_id}});
                    }}
                />
            )}
            />
        </View>;
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput placeholder="Item Name" onChangeText={text => setSearch(text)}
                           style={styles.input} />
            </View>
            {bodyBlock}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: "center",
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    bottomContainerResults: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
    },

    listItem: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    bottomContainerError: {
        width: '90%',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ADD8E6',
    },
});

