import 'react-native'
import React from 'react'
import ManualItemSearch from '../Pages/ManualItemSearch'

import {fireEvent, render} from "@testing-library/react-native";
import {NavigationContainer} from "@react-navigation/native";
import {wait} from "@testing-library/react-native/build/user-event/utils";
import {create} from "react-test-renderer";
import {it} from "@jest/globals";

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

/**
 * This is a test suite for the ManualItemSearch component
 */

describe('ManualItemSearch', () => {

    /**
     * This is a test for the rendering of the component
     */
    it('Renders', async () => {

        jest.useFakeTimers();

        const page = create(<NavigationContainer><ManualItemSearch props={props}/></NavigationContainer>).toJSON();
        expect(page).toMatchSnapshot();
    });

    /**
     * This is a test to check whether the input field is intractable.
     */

    it('Check if text box is selectable', () => {
        let page, input;
        page = render(<NavigationContainer><ManualItemSearch props={props}/></NavigationContainer>);
        input = page.getByPlaceholderText('Item Name');
        console.log(input.props.placeholder);
        expect(input.props.placeholder).toBe('Item Name');
        fireEvent.changeText(page.getByPlaceholderText('Item Name'), 'Lays');
        expect(input.props.value).toBe('Lays');
    });

    /**
     * This 'will be' is a test to check whether the useEffect is working
     */

    it('Verify useEffect is working', async () => {
        const page = render(<NavigationContainer><ManualItemSearch props={props}/></NavigationContainer>);
        const input = page.getByPlaceholderText('Item Name');
        fireEvent.changeText(input, 'Lays');
        await wait(2000);
    });
});