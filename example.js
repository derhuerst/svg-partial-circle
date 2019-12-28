'use strict'

const partialCircle = require('.')

const degreesToRadians = degrees => ((degrees * Math.PI) / 180)

const print = (d) => `
<path
	d="${d.map(vs => vs.join(' ')).join(' ')}"
	stroke="black" stroke-width="3" fill="none"
	marker-end="url(#arrow)"
/>
`

console.log(`
<svg
	version="1.1"
	width="300"
	height="300"
	viewBox="-10 -10 120 120"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<marker
			id="arrow"
			orient="auto"
			markerWidth="2"
			markerHeight="4"
			refX="0.1"
			refY="2"
		>
			<path d="M0,0 V4 L2,2 Z" fill="red" />
		</marker>
	</defs>
	${print(partialCircle(50, 50, 50, 0, degreesToRadians(90)))}
	${print(partialCircle(50, 50, 50, 0, degreesToRadians(-90)))}
</svg>
`)
