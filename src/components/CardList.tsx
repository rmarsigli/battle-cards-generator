import React from 'react'
import { CardListProps } from './../types'

const CardList: React.FC<CardListProps> = ({list}: {list: {name: string; value: string;}[]}) => {
	return (
		<div className='absolute bottom-0 left-0 w-full p-2 z-10'>
			<div className="bg-slate-50 bg-opacity-75 rounded-md text-gray-700 text-xs shadow-lg py-0.5">
				{list.map((attr: { name: string; value: string; }, index) => (
					<span key={index} className='py-1 border-b border-slate-400 border-opacity-25 last:border-0 px-2 flex items-center justify-between flex-row'>
						<p className='text-slate-900 font-semibold'>{attr.name}</p>
						<strong className='text-blue-500 rounded-sm font-bold'>{attr.value}</strong>
					</span>
				))}
			</div>
		</div>
	)
}

export default CardList