import React from 'react'
import { CardProps } from './../types'
import CardTitle from './CardTitle'
import CardImage from './CardImage'
import CardList from './CardList'
import CardRightIcon from './CardRightIcon'

const Card: React.FC<CardProps> = ({ name, image, attributes, rightIcon }) => (
	<div className='card relative bg-black border-4 border-black rounded-2xl flex flex-col items-center'>
		<CardTitle>{name}</CardTitle>
		{image && <CardImage image={image} />}
		<CardList list={attributes} />
		{rightIcon && <CardRightIcon image={rightIcon} /> }
	</div>
)

export default Card