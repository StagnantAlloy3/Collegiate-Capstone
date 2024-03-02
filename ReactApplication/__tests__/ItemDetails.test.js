import 'react-native';
import React from 'react';
import {ItemDetails} from '../Pages/ItemDetails';

import {fireEvent, render} from "@testing-library/react-native";
import {NavigationContainer} from "@react-navigation/native";
import {it} from "@jest/globals";
import {act} from "react-test-renderer";
import {wait} from "@testing-library/react-native/build/user-event/utils";


const props = {
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
    }
};

describe('ItemDetails', () => {

    props.fdc_id = 1105904;

    it('Renders', async () => {
        const page = await(render(<NavigationContainer><ItemDetails props={props}/></NavigationContainer>));
        await wait(10000);
    });
});