// Test away!
import Controls from './Controls'
import React from 'react'
import {render, fireEvent } from '@testing-library/react';



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

test('test the colors of the buttons', () => {
    const display = render(<Controls closed={false} locked={false}/>)
    display.getByText('Closed')
    display.getByText('Unlocked')

    expect(display.getByText('Closed').className).toContain('red-led')
    expect(display.getByText('Unlocked').className).toContain('green-led')
})

// const lockedButton = getByTestId(/lockedbutton/i);
//     const openButton = getByTestId(/openbutton/i);

//     fireEvent.click(lockedButton.disabled);

//     expect(lockedButton).to        

