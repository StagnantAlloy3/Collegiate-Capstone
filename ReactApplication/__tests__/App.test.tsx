/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {fireEvent, render} from "@testing-library/react-native";
import {Animated} from "react-native";
import delay = Animated.delay;


//Runs no issues
it('shows the Home Page', async() => {

    // @ts-ignore
    jest.useFakeTimers();

    const tree = render(<App/>).toJSON();

    expect(tree).toMatchSnapshot();

});


//Runs with major console issues
it('navigates to Details Page by clicking on the details icon', async () => {

    // @ts-ignore
    jest.useFakeTimers();

    const tree = render(<App/>);

    //click on the element with the details text
    fireEvent.press(tree.getByText('Details'));

    delay(2000);
    tree.toJSON();

    // Check if the details function is rendering
    expect(tree).toMatchSnapshot();

});

it('navigates to Details2 Page by clicking the details2 icon', async () => {

    // @ts-ignore
    jest.useFakeTimers();

    const tree = render(<App/>);

    //click on the element with the details text
    fireEvent.press(tree.getByText('Details2'));

    delay(2000);
    tree.toJSON();

    // Check if the details function is rendering
    expect(tree).toMatchSnapshot();
});
