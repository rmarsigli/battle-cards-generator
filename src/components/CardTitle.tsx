import React from 'react'
import { CardTitleProps } from './../types'

const CardTitle: React.FC<CardTitleProps> = ({children}) => (
	<div className='absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.75)]'>
		<h3 className='px-2 py-1 text-lg text-white font-bold rounded-md drop-shadow-md'>{children}</h3>
	</div>
)

export default CardTitle