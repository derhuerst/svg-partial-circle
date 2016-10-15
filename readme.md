# [svg-partial-circle](http://jannisr.de/svg-partial-circle/)

**Compute the SVG path of a partial circle.**

Compared to Canvas, defining artial circle is surprisingly complex. I searched for a module that encapsulates this complexity and [there are modules out there](svg progress circle). But all of them are not modular enough (aka opinionated).

[![npm version](https://img.shields.io/npm/v/svg-partial-circle.svg)](https://www.npmjs.com/package/svg-partial-circle)
[![build status](https://img.shields.io/travis/derhuerst/svg-partial-circle.svg)](https://travis-ci.org/derhuerst/svg-partial-circle)
[![dependency status](https://img.shields.io/david/derhuerst/svg-partial-circle.svg)](https://david-dm.org/derhuerst/svg-partial-circle)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/svg-partial-circle.svg)](https://david-dm.org/derhuerst/svg-partial-circle#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/svg-partial-circle.svg)

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
<path d="M -14.142135 14.142135 A 20 20 0 0 0 14.142135 14.142135" />
```


## Installing

```shell
npm install svg-partial-circle
```


## API

```
partialCircle(cx, cy, r, start, end)
```

`start` and `end` are in [radians](https://en.wikipedia.org/wiki/Radian). `partialCircle(…)` returns an array of [path commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d), each command being an array of its parts.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/svg-partial-circle/issues).
