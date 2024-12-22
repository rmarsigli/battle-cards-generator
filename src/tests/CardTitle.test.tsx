import {render, screen} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import CardTitle from '../components/CardTitle'

describe('CardTitle', () => {
	it('renders the children correctly', () => {
		const testText = 'Test Title'

		render(<CardTitle>{testText}</CardTitle>)

		const titleElement = screen.getByText(testText)
		expect(titleElement).toBeInTheDocument()
	})

	it('applies the correct classes to the outer container', () => {
		render(<CardTitle>Test</CardTitle>)

		const container = screen.getByText('Test').parentElement
		expect(container).toHaveClass('absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.75)]')
	})

	it('applies the correct classes to the inner <h3> element', () => {
		render(<CardTitle>Test</CardTitle>)

		const titleElement = screen.getByText('Test')
		expect(titleElement).toHaveClass('px-2 py-1 text-lg text-white font-bold rounded-md drop-shadow-md')
	})
})