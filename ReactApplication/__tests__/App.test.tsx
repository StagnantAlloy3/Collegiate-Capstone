/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {act} from 'react-test-renderer';
import {fireEvent, render, waitFor} from "@testing-library/react-native";

it('shows the Home Page', async() => {
    const {getByText} = render(<App/>);
    await waitFor(() => {
        // @ts-ignore
        expect(getByText('Home Screen')).toBeTruthy();
    });
});

it('navigates to Details Page by clicking on the details icon', async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
        // @ts-ignore
        expect(getByText('Home Screen')).toBeTruthy();
    });

    act(() => {
        fireEvent.press(getByText('Details'));
    });

    // Check if the details function is rendering
    setTimeout(() => {
        // @ts-ignore
        expect(getByText('Details Screen')).toBeTruthy();
        // @ts-ignore
        done();
    }, 1000);
});

it('navigates to Details2 Page by clicking the details2 icon', async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
        // @ts-ignore
        expect(getByText('Home Screen')).toBeTruthy();
    });

    act(() => {
        fireEvent.press(getByText('Details2'));
    });

    // Check if the details function is rendering
    setTimeout(() => {
        // @ts-ignore
        expect(getByText('Details Screen')).toBeTruthy();
        // @ts-ignore
        done();
    }, 1000);
});