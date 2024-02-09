/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ManualItemSearch from "./Pages/ManualItemSearch";


function DetailsScreen({props} : {props: any}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <Text>Details Screen</Text>
        </View>
    );
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() == 'dark';
    const theme = isDarkMode ? darkTheme : lightTheme;
    const stripTheme = useTheme();

    //This line absolutely works. Not sure why the error throws.  Watch the background of the navbar with and without this line commented out.
    // @ts-ignore
    stripTheme.colors.secondaryContainer = 'transparent';

    const Tab = createMaterialBottomTabNavigator();


    return (
        <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                       backgroundColor={theme.colors.background}/>
            <Tab.Navigator inactiveColor={theme.colors.secondary} activeColor={theme.colors.navBarIcon} barStyle={{backgroundColor: theme.colors.navBarBackground}}
                           shifting keyboardHidesNavigationBar theme={{colors: {secondaryContainer: 'transparent'}}}>
                <Tab.Screen name="Search" children={() => <ManualItemSearch props={theme}/> }
                            options={{
                                tabBarLabel: 'Search',
                                tabBarIcon: () => (<MaterialIcons name="search" color={theme.colors.navBarIcon} size={26}/>),
                            }}
                />
                <Tab.Screen name="Details" children={() => <DetailsScreen props={theme}/>} options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: () => (<MaterialIcons name="info" color={theme.colors.navBarIcon} size={26}/>),
                }}
                />
                <Tab.Screen name="Details2" children={() => <DetailsScreen props={theme}/>} options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: () => (<MaterialIcons name="info" color={theme.colors.navBarIcon} size={26}/>),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const lightTheme = {
    dark: false,
    colors: {
        text: '#000000',
        primary: '#D2D2C8',
        secondary: '#F0F5EF',
        warning: '#B6B7B2',
        border: '#EFF1E6',
        background: '#E0E2D7',
        navBarBackground: '#E0E2D7',
        navBarIcon: '#B6B7B2',
        navBarText: '##B6B7B2',
    },
};

const darkTheme = {
    dark: true,
    colors: {
        text: '#ffffff',
        primary: '#4F81F7',
        secondary: '#3A356E',
        warning: '#F5F549',
        border: '#00F4CC',
        background: '#000000',
        navBarBackground: '#000000',
        navBarIcon: '#EFB7FF',
        navBarText: '#EFB7FF',
    },
}

export default App;
