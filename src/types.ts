import { ReactNode } from 'react'

export interface CardAttribute {
	name: string,
	value: string
}

export interface CardProps {
	name: string
	image?: string|null
	attributes: CardAttribute[],
	rightIcon?: string|null
}

export interface CardTitleProps {
	children: ReactNode
}

export interface CardImageProps {
	image: string
}

export interface CardListProps {
	list: CardAttribute[]
}