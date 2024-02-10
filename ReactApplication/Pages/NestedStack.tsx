import ItemDetails from "./ItemDetails.tsx";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ManualItemSearch from "./ManualItemSearch.tsx";
import {NavigationContainer} from "@react-navigation/native";


export default function NestedStack({props}: { props: any }) {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ManualItemSearch" component={ManualItemSearch(props)}/>
                <Stack.Screen name="ItemDetails" component={ItemDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}