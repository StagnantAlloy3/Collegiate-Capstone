import React from 'react';
import {Text, TextInput, View} from "react-native";
import {Banner} from "react-native-paper";
import {ByName} from "../Query Functions/ByName";

function ManualItemSearch({props} : {props: any}): React.JSX.Element {


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <View>
                <TextInput placeholder="Item Name" onChangeText={(item) => ByName(item)} style={{borderColor: props.colors.borderColor, borderStyle: 'solid', borderWidth: 1}}/>
            </View>

            <Text>Manual Item Search</Text>
        </View>
    );
}

export default ManualItemSearch;