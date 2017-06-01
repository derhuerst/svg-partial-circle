import test from 'ava'
import partialCircle from '.'

/*
 * API's: cx, cy, r, start, end
 *
 * Eg:
 * partialCircle(50, 50, 50, 0, degreesToRadians(90))
 *
 * Result shape: [
 *   [ 'M', 100, 50 ],
 *   [ 'A', 50, 50, 0, '0', '1', 50, 100 ]
 * ]
 */

const degreesToRadians = degrees => ((degrees * Math.PI) / 180)

test('Should return array containg 2 an "M" and an "A" path command', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const M = actual[0]
	const A = actual[1]

	t.is(actual.length, 2)
	t.is(M[0], 'M')
	t.is(A[0], 'A')
})

test('Should return an "M" command representing the point where the arc starts', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const startX = actual[0][1]
	const startY = actual[0][2]

	t.is(startX, 100)
	t.is(startY, 50)
})

test('Should return an "A" command representing the point where the arc ends', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const endX = actual[1][6]
	const endY = actual[1][7]

	t.is(endX, 50)
	t.is(endY, 100)
})

test('Should return an "A" command with correct radius values', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const radiusX = actual[1][1]
	const radiusY = actual[1][2]

	t.is(radiusX, 50)
	t.is(radiusY, 50)
})

test('Should return an "A" command with "large" flag disabled for arcs < 180°', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const largeFlag = actual[1][4]

	t.is(largeFlag, '0')
})

test('Should return an "A" command with "sweep" flag enabled for arcs with positive direction', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const sweepFlag = actual[1][5]

	t.is(sweepFlag, '1')
})

test('Should return an "A" command with "sweep" flag disabled for arcs with negative direction', t => {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(-90))
	const sweepFlag = actual[1][5]

	t.is(sweepFlag, '0')
})
