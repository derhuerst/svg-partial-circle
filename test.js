'use strict'

const a = require('assert')
const eql = require('is-roughly-equal')

const partialCircle = require('.')

const degreesToRadians = degrees => ((degrees * Math.PI) / 180)

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

// should return array containg 2 an "M" and an "A" path command
;(function ninetyDegrees () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const M = actual[0]
	const A = actual[1]

	a.strictEqual(actual.length, 2)
	a.strictEqual(M[0], 'M')
	a.strictEqual(A[0], 'A')
})()

// should return an "M" command representing the point where the arc starts
;(function correctStartPoint () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const startX = actual[0][1]
	const startY = actual[0][2]

	a.strictEqual(startX, 100)
	a.strictEqual(startY, 50)
})()

// should return an "A" command representing the point where the arc ends
;(function correctEndPoint () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const endX = actual[1][6]
	const endY = actual[1][7]

	a.strictEqual(endX, 50)
	a.strictEqual(endY, 100)
})()

// should return an "A" command with correct radius values
;(function correctRadius () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const radiusX = actual[1][1]
	const radiusY = actual[1][2]

	a.strictEqual(radiusX, 50)
	a.strictEqual(radiusY, 50)
})()

// should return an "A" command with "large" flag disabled for arcs < 180°
;(function correctLargeFlag () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const largeFlag = actual[1][4]

	a.strictEqual(largeFlag, '0')
})()

// should return an "A" command with "sweep" flag enabled for arcs with positive direction
;(function correctSweepFlagPositive () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(90))
	const sweepFlag = actual[1][5]

	a.strictEqual(sweepFlag, '1')
})()

// should return an "A" command with "sweep" flag disabled for arcs with negative direction
;(function correctSweepFlagNegative () {
	const actual = partialCircle(50, 50, 50, 0, degreesToRadians(-90))
	const sweepFlag = actual[1][5]

	a.strictEqual(sweepFlag, '0')
})()

// should return an empty path for 0 degrees
;(function correctZeroDegrees () {
	const actual = partialCircle(10, 15, 20, 1.3, 1.3)
	a.deepStrictEqual(actual, []) // 0 degrees
})()

process.stdout.write('tests passing\n')
