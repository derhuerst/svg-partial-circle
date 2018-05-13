# [svg-partial-circle](https://derhuerst.github.io/svg-partial-circle/)

**Compute the SVG path of a partial circle.**

Compared to Canvas, defining a partial circle is surprisingly complex. I searched for a module that encapsulates this complexity and [there are modules out there](https://github.com/search?l=JavaScript&q=svg+progress+circle). But all of them are not modular enough (people call this opinionated).

[![npm version](https://img.shields.io/npm/v/svg-partial-circle.svg)](https://www.npmjs.com/package/svg-partial-circle)
[![build status](https://img.shields.io/travis/derhuerst/svg-partial-circle.svg)](https://travis-ci.org/derhuerst/svg-partial-circle)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/svg-partial-circle.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install svg-partial-circle
```


## Usage

```js
const partialCircle = require('svg-partial-circle')

const path = partialCircle(
	30, 30,         // center X and Y
	20,             // radius
	Math.PI / 4,    // start angle
	Math.PI * 7 / 4 // end angle
)
.map((command) => command.join(' '))
.join(' ')

console.log(`<path d="${path}" />`)
```

```svg
<path d="M 44.14213562373095 44.14213562373095 A 20 20 0 1 1 44.14213562373095 15.857864376269045" />
```


## API

```
partialCircle(cx, cy, r, start, end)
```

`start` and `end` are in [radians](https://en.wikipedia.org/wiki/Radian). `partialCircle(…)` returns an array of [path commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d), each command being an array of its parts.

`start < end` will draw a clockwise segment, while `start > end` a counterclockwise one.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/svg-partial-circle/issues).
