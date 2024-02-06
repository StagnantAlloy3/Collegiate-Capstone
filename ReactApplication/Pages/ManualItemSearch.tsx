import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from "react-native";
import {ByName} from "../Query Functions/ByName";

function ManualItemSearch({props} : {props: any}): React.JSX.Element {


    const [search, setSearch] = useState('');


    useEffect( () => {
        console.log(search);
        const delaySearch = setTimeout(() => {
            console.log(search);
            if(search.length > 1) {
                ByName(search);
            }
        }, 1000);
        return () => clearTimeout(delaySearch);
    }, [search]);

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <View>
                <TextInput placeholder="Item Name" onChangeText={text => setSearch(text)} style={{borderColor: props.colors.borderColor, borderStyle: 'solid', borderWidth: 1}}/>
            </View>
            <Text>Manual Item Search</Text>
        </View>
    );
}

export default ManualItemSearch;