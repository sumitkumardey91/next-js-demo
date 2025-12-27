import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import UiComponent from '../app/jest/uiComponent';

describe('Counter Page', () => {
  it('increment button click', () => {
    render(<UiComponent/>)

    const incrementBtn = screen.getByText('Increment')
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)

    expect(screen.getByText('Count: 2')).toBeInTheDocument()

  })
})