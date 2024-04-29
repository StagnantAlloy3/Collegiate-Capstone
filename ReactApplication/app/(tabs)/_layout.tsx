import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue',}} backBehavior="history">
            <Tabs.Screen
                name="manualLookup"
                options={{
                    title: 'Search',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="search" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Scanner',
                    tabBarIcon: ({color}) => <FontAwesome name="barcode" size={28} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="itemDetailsManual"
                options={{
                    title: 'Item Details',
                    href: null
                }}/>
            <Tabs.Screen
                name="itemDetailsBarcode"
                options={{
                    title: 'Item Details',
                    href: null
                }}/>
        </Tabs>
    );
}
