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
    
})

// const lockedButton = getByTestId(/lockedbutton/i);
//     const openButton = getByTestId(/openbutton/i);

//     fireEvent.click(lockedButton.disabled);

//     expect(lockedButton).to