'use strict'

// from http://stackoverflow.com/a/18473154
const partialCircle = (cx, cy, r, start, end) => {
	const length = end - start
	if (length === 0) return []

	const fromX = r * Math.cos(end) + cx
	const fromY = r * Math.sin(end) + cy
	const toX = r * Math.cos(start) + cx
	const toY = r * Math.sin(start) + cy
	const large = length <= Math.PI ? '0' : '1'

	return [
		['M', fromX, fromY],
		['A', r, r, 0, large, 0, toX, toY]
	]
}

module.exports = partialCircle
