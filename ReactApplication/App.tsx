/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function Home() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "black"}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const theme = useState(isDarkMode ? darkTheme : lightTheme);

    const Tab = createMaterialBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                       backgroundColor={theme.colors.notification}/>
            <Tab.Navigator inactiveColor={theme.colors.secondary} activeColor={theme.colors.primary} barStyle={{backgroundColor: theme.colors.border}}>
                <Tab.Screen name="Home" component={Home}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: () => (<MaterialIcons name="home" color={theme.colors.card} size={26}/>),
                                tabBarBadge: 3
                            }}
                />
                <Tab.Screen name="Details" component={DetailsScreen} options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: () => (<MaterialIcons name="info" color="blue" size={26}/>),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
        /*<SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Header />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
              <Section title="Step One">
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Section>
              <Section title="See Your Changes">
                <ReloadInstructions />
              </Section>
              <Section title="Debug">
                <DebugInstructions />
              </Section>
              <Section title="Learn More">
                Read the docs to discover what to do next:
              </Section>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>*/
    );
}

/*const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});*/

const lightTheme = {
    dark: false,
    colors: {
        primary: '#3A356E',
        background: '#00F4CC',
        card: '#F5F549',
        text: '#000000',
        border: '#EFB7FF',
        secondary: '#4F81F7',
    },
};

const darkTheme = {
    dark: false,
    colors: {
        primary: 'rgb(45,104,255)',
        background: 'rgba(242,242,242,0.29)',
        card: 'rgba(255,255,255,0.44)',
        text: 'rgb(28, 28, 30)',
        border: 'rgba(199,199,204,0.6)',
        notification: 'rgb(90,236,7)',
        secondary: 'rgb(28, 28, 30)',
    },
}

export default App;
