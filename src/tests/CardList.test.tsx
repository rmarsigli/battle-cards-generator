import {render, screen} from '@testing-library/react'
import {describe, it} from 'vitest'
import CardList from '../components/CardList'

describe('CardList Component', () => {
	it('renders without crashing and displays all list items', () => {
		const testList = [
			{name: 'Item 1', value: 'Value 1'},
			{name: 'Item 2', value: 'Value 2'},
			{name: 'Item 3', value: 'Value 3'},
		]

		render(<CardList list={testList}/>)

		testList.forEach((item) => {
			expect(screen.getByText(item.name)).toBeInTheDocument()
			expect(screen.getByText(item.value)).toBeInTheDocument()
		})
	})

	it('renders an empty state when the list is empty', () => {
		render(<CardList list={[]}/>)
		expect(screen.queryByText(/Item/)).not.toBeInTheDocument()
	})
})