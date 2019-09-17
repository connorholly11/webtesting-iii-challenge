// Test away!
import Controls from './Controls'
import Dashboard from '../dashboard/Dashboard';
import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import { get } from 'https';



test('defaults to locked and unlocked', () => {
    const toggleLocked = jest.fn()
    const toggleClosed = jest.fn()
    const locked = false
    const closed = false

    render (<Controls 
        locked={locked} 
        closed={closed} 
        toggleLocked={toggleLocked} 
        toggleClosed = {toggleClosed}
        />)

    expect(locked).toBe(false)
    expect(closed).toBe(false)
})

test('text changes to the state the door will be in if its clicked', () => {
    const {getByText} = render(<Dashboard />)
    const CloseButton = getByText(/close gate/i)
    const LockButton = getByText(/lock gate/i)


    getByText(/close gate/i);

    fireEvent.click(CloseButton);

    getByText(/open gate/i)
    getByText(/lock gate/i)

    fireEvent.click(LockButton);

    const UnlockButton = getByText(/unlock gate/i)

    getByText(/unlock gate/i)

    fireEvent.click(UnlockButton)

    const OpenButton = getByText(/open gate/i)

    getByText(/open gate/i)
    getByText(/lock gate/i)

    fireEvent.click(OpenButton);
})

test('closed button disabled if gate is locked', () => {
    const {getByText} = render(<Dashboard />)
    const LockButton = getByText(/lock gate/i)
    const CloseButton = getByText(/close gate/i)
    fireEvent.click(CloseButton);
    fireEvent.click(LockButton)
    expect(CloseButton.disabled).toBe(true);
})



// test('test the colors of the buttons', () => {
//     const display = render(<Controls closed={false} locked={false}/>)
//     display.getByText(/Closed/i)
//     display.getByText(/unlocked/i)

//     expect(display.getByText('Closed').className).toContain('red-led')
//     expect(display.getByText('Unlocked').className).toContain('green-led')
// })

// test('displays closed when closed prop is true', () => {
//     const display = render(<Controls />)
//     display.getByText
// })

// const lockedButton = getByTestId(/lockedbutton/i);
//     const openButton = getByTestId(/openbutton/i);

//     fireEvent.click(lockedButton.disabled);

//     expect(lockedButton).to        

