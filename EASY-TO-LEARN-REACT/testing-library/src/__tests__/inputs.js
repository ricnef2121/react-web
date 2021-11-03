import React from 'react'
import { render, fireEvent } from  '@testing-library/react'
import Problem from '../Components/Inputs'

it("has two inputs that I can change to see if it works", () => {
    // Arrange
    const { getByTestId, getByPlaceholderText, getByLabelText } = render(<Problem total={30}/>)
    const checkResult = getByTestId('check')
    // The getByPlaceholderText work as you would expect, the input can be found
    // via the value of the PlaceholderText attribute
    const input_one = getByPlaceholderText('Place the first number here!')
    // The getByLabelText grabs the input by the label
    const input_two = getByLabelText('Number 2')
    const result = getByTestId('result')

    // Act
    fireEvent.change(input_one, { target: { value: 10 } })
    fireEvent.change(input_two, { target: { value: 20 } })
    fireEvent.click(checkResult)

    // Asserting that it was correct
    expect(result.textContent).toBe('Good')
})