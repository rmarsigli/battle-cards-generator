import React from 'react'
import { CardImageProps } from '../types.ts'

const CardRightIcon: React.FC<CardImageProps> = ({ image }) => {
	return (
		<div className='absolute top-1 right-2 w-8 rounded-md z-20'>
			<img src={`data/${image}`} alt='Image icon' className='w-full block'/>
		</div>
	)
}

export default CardRightIcon