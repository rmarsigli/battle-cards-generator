import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CardRightIcon from '../components/CardRightIcon'

describe('CardRightIcon', () => {
	it('renders correctly with the provided image prop', () => {
		const testImage = 'test-image.png'
		render(<CardRightIcon image={testImage}/>)

		const imgElement = screen.getByAltText('Image icon')
		expect(imgElement).toBeInTheDocument()
		expect(imgElement).toHaveAttribute('src', `data/${testImage}`)
	})
})