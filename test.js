'use strict'

const a = require('assert')
const eql = require('is-roughly-equal')
const pC = require('.')

a.deepStrictEqual(pC(10, 15, 20, 1.3, 1.3), []) // 0 degrees



const p = pC(10, 15, 20, .3, Math.PI)
a(Array.isArray(p))
a.strictEqual(p.length, 2)
const [move, arc] = p

a(Array.isArray(move))
a.strictEqual(move.length, 3)

a.deepStrictEqual(move[0], 'M')
a(eql(.0001, move[1], 10 - 20))
a(eql(.0001, move[2], 15))

a(Array.isArray(arc))
a.strictEqual(arc.length, 8)

a.strictEqual(arc[0], 'A') // command
a.strictEqual(arc[1], 20) // r
a.strictEqual(arc[2], 20) // r
a.strictEqual(arc[3], 0)
a.strictEqual(arc[4], '0') // large flag
a.strictEqual(arc[5], 0)
a(eql(.0001, arc[6], 29.1067)) // toX
a(eql(.0001, arc[7], 20.9104)) // toY



process.stdout.write('tests passing\n')
