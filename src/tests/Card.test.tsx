import { render } from '@testing-library/react'
import Card from '../components/Card'

describe('Card', () => {
	const mockProps = {
		name: 'Test Name',
		image: 'test-image-url',
		attributes: [
			{ name: 'First', value: 'Test Attribute' },
			{ name: 'Second', value: 'Test Value' }
		],
		rightIcon: 'test-icon-url',
	}

	
	it('should render the Card component', () => {
		const {container} = render(<Card {...mockProps} />)
		expect(container).toBeInTheDocument()
	})
})