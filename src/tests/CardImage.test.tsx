import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CardImage from '../components/CardImage'

describe('CardImage Component', () => {
	it('renders correctly with the provided image', () => {
		const image = 'example.jpg'
		const { container } = render(<CardImage image={image} />)

		const imgElements = container.querySelectorAll('img')
		expect(imgElements).toHaveLength(2) // Verifica o número de imagens
		expect(imgElements[0]).toHaveAttribute('src', `data/${image}`)
		expect(imgElements[1]).toHaveAttribute('src', `data/${image}`)

		const gradientDivs = container.querySelectorAll('div')
		const backdropDiv = Array.from(gradientDivs).find(div =>
			div.classList.contains('bg-gradient-to-t') && div.classList.contains('from-black')
		)
		expect(backdropDiv).toBeDefined()
	})
})