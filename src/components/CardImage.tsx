import React from 'react'
import { CardImageProps } from './../types'

const CardImage: React.FC<CardImageProps> = ({image}) => (
	<div className='absolute top-0 left-0 w-full h-full bg-black'>
		<figure className='w-full h-[51%] relative'>
			<div
				className="absolute left-0 bottom-0 w-full h-1/4 z-10"
				style={ImageBackdropGradient}
			></div>
			<img src={`data/${image}`} alt='Card Image' className='object-cover object-center w-full h-full'/>
		</figure>
		<figure className="w-full h-1/2">
			<img src={`data/${image}`} alt='Card Image'
			     className='object-cover object-center w-full h-full rotate-180 transform -scale-x-100' />
		</figure>
		<div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-t from-black"></div>
	</div>
)

const ImageBackdropGradient = {
	backdropFilter: 'blur(2px)',
	WebkitMask: 'linear-gradient(180deg, transparent, black 50%)'
}

export default CardImage