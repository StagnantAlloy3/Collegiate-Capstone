/**
 * App Component
 * This is the main component of the application. It sets up the navigation and theme for the application.
 * It uses a Material Bottom Tab Navigator to navigate between different screens.
 * It also checks if the system is in dark mode and sets the theme app-wide.
 *
 * @returns {React.JSX.Element} Navigation container with three routes.
 */

//Importing the necessary modules from react-native
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


//Home Component (Placeholder)
function Home({props}: { props: any }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <Text>Home Screen</Text>
        </View>
    );
}

//Details Component (Placeholder)
function DetailsScreen({props} : {props: any}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: props.colors.background}}>
            <Text>Details Screen</Text>
        </View>
    );
}

//App Component
function App(): React.JSX.Element {
    // Check if dark mode or not, then set the theming appropriately
    const isDarkMode = useColorScheme() == 'dark';
    const theme = isDarkMode ? darkTheme : lightTheme;
    const stripTheme = useTheme();

    //This line absolutely works. Not sure why the error throws.  Watch the background of the navbar with and without this line commented out.
    // Line removes the background from the icons in the nav bar when icon is selected.
    // @ts-ignore
    stripTheme.colors.secondaryContainer = 'transparent';

    //Creates the BottomTab Navigator
    const Tab = createMaterialBottomTabNavigator();


    //Returns the Navigation container with three routes.
    return (
        <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                       backgroundColor={theme.colors.background}/>
            <Tab.Navigator inactiveColor={theme.colors.secondary} activeColor={theme.colors.navBarIcon} barStyle={{backgroundColor: theme.colors.navBarBackground}}
                           shifting keyboardHidesNavigationBar theme={{colors: {secondaryContainer: 'transparent'}}}>
                <Tab.Screen name="Home" children={() => <Home props={theme}/> }
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: () => (<MaterialIcons name="home" color={theme.colors.navBarIcon} size={26}/>),
                            }}
                />
                <Tab.Screen name="Details" children={() => <DetailsScreen props={theme}/>} options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: () => (<MaterialIcons name="info" color={theme.colors.navBarIcon} size={26}/>),
                }}
                />
                <Tab.Screen name="Details2" children={() => <DetailsScreen props={theme}/>} options={{
                    tabBarLabel: 'Details2',
                    tabBarIcon: () => (<MaterialIcons name="info" color={theme.colors.navBarIcon} size={26}/>),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

//Light theme colors for the app
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

//Dark theme colors for the app
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
