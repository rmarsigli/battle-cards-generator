import React, { useRef } from 'react'

type UsePrintHookReturn = {
	print: () => void
	contentRef: React.RefObject<HTMLDivElement>
}

const usePrintHook = (): UsePrintHookReturn => {
	const contentRef = useRef<HTMLDivElement>(null)

	const print = () => {
		if (!contentRef.current) {
			console.error('PrintHook: No content to print!')
			return
		}

		const printContent = contentRef.current.innerHTML
		const originalContent = document.body.innerHTML

		document.body.innerHTML = printContent
		window.print()
		document.body.innerHTML = originalContent
		window.location.reload()
	};

	return { print, contentRef }
}

export default usePrintHook