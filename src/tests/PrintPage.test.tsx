import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PrintPage from '../pages/PrintPage'

// Mock do JSON de dados
vi.mock('../../public/data/cards.json', () => ({
	default: [
		{
			name: 'Card 1',
			id: 1,
			image: 'image1.png',
			attributes: { attack: 10, defense: 5 },
		},
		{
			name: 'Card 2',
			id: 2,
			image: 'image2.png',
			attributes: { magic: 15, speed: 20 },
		},
	],
}))

describe('PrintPage', () => {
	it('renderiza uma lista de cartas a partir do arquivo JSON', () => {
		render(<PrintPage />)

		// Verifica que as cartas são renderizadas no DOM
		expect(screen.getByText('Card 1')).toBeInTheDocument()
		expect(screen.getByText('Card 2')).toBeInTheDocument()
	})
})