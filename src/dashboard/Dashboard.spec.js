// Test away

import React from 'react';
import {render } from '@testing-library/react';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls'
import Display from '../display/Display'

test('is dashboard rendering properly', () => {
    render(<Dashboard/>)
})

test('is controls rendering properly', () => {
    render(<Controls/>)
})

test('is display rendering properly', () => {
    render(<Display/>)
})

// test('is default unlocked and open', () => {
//     const {getByText} = render(<Dashboard/>)

//     getByText(/locked/i)

// })




