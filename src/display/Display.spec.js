// render and then pass in the prop your looking for
//get the getByText with the word your looking for 
//then expect(^).toHaveClass('red-led')

// Test away!

import React from 'react';
import {render, getByText} from '@testing-library/react';
import Display from './Display';
import '@testing-library/jest-dom/extend-expect'

test('locked and closed are set to false', () => {
    render(<Display/>)
    expect(Display.defaultProps.closed).toBe(false);
    expect(Display.defaultProps.locked).toBe(false);
})


test('display if gate is locked', () => {
    const {getByText} = render (<Display locked={false}/>)
    expect(getByText('Unlocked'))
})

test ('display if gate is closed',() => {
    const {getByText} = render(<Display closed={true}/>)
    expect(getByText('Closed'))
})

test('display if gate is open', () => {
    const {getByText} = render(<Display open={false} />)
    expect(getByText('Open'))
})

test('red-led class when locked or closed', ()=> {
    const {getByText} = render(<Display locked={true} />)
    const locked = getByText('Locked')
    expect(locked).toHaveClass('red-led')
})

test('green-led when locked or closed', () => {
    const {getByText} = render(<Display locked={false}/>)
    const locked = getByText('Open')
    expect(locked).toHaveClass('green-led')
})