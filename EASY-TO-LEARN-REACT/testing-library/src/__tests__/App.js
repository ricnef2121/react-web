import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from '../Components/Counter'

it("starts at 0 and it is incremented to 1", () => {
    // Render takes a component (props can be passed in as well
    // I am going to use getByTestId to access elements
    const { getByTestId } = render(<Counter />)

    // getByTestId will match elements by the attribute data-testid="count"
    // here I saved two elements in their respective variables
    const count = getByTestId('count')
    const plusButton = getByTestId('plus')

    // I can check properties on the element
    // I want to make sure the tag is showing the  count to be at 0 to begin
    expect(count.textContent).toBe('0')

    // fireEvent is a function that we imported from the library
    // it allows us to click on the button the way the user would.
    // I simply access the click function on it and pass a element for it to click
    fireEvent.click(plusButton)

    // Asserting that it now is now 1
    expect(count.textContent).toBe('1')
})
