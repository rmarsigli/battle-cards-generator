import React from 'react'
import cardsList from '../../public/data/cards.json'
import Card from '../components/Card'
import { CardProps } from '../types'
import usePrintHook from "../hooks/usePrintHook.tsx";

const PrintPage: React.FC = () => {

	const cards: CardProps[] = cardsList.map((card) => ({
		...card,
		attributes: Object.entries(card.attributes).map(([key, value]) => ({
			name: key,
			value,
		})),
	}))

	const { print, contentRef } = usePrintHook()
	const ItemsPerPage: number = 9

	return (
		<div className='p-4 print:p-0'>
			<div className='w-full flex items-center justify-center p-8 mb-8 border-b border-slate-300'>
				<button
					onClick={print}
					className='border-4 border-slate-700 px-4 py-2 rounded-md text-slate-700 uppercase font-bold hover:bg-slate-700 hover:text-white'
				>
					Print cards!
				</button>
			</div>
			{cards.length > 0 ? (
				<div ref={contentRef}>
					<div className='w-full flex items-start justify-center gap-2 flex-row flex-wrap print:py-4'>
						{cards.map((card, index) => (
							<>
								<Card
									key={index}
									name={card.name}
									image={card.image ?? null}
									attributes={card.attributes}
									rightIcon={card.rightIcon ?? null}
								/>

								{(index + 1) % ItemsPerPage === 0 && (
									<div className='hidden print:block print:w-full print:break-after-page'></div>
								)}
							</>
						))}
					</div>
				</div>
			) : (
				<div>No cards!</div>
			)}
		</div>
	);
}

export default PrintPage