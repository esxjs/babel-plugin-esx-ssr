# babel-plugin-esx-ssr

Babel plugin for the Server-Side which converts JSX to ESX
for performance gains. 

## Status

Experimental.

## Example

**In**

```js
import React from 'react'

const data = { value: 'hi '}

const Component = ({value}) => (
  <div>
    <p> some content </p>
    <p> some {value} </p>
  </div>
)

const App = () => <Component {...data}/>

export default App
```

**Out**

```js
const esx = require('esx')();

import React from 'react';
const data = {
  value: 'hi '
};

const Component = ({
  value
}) => esx`<div>
    <p> some content </p>
    <p> some ${value} </p>
  </div>`;

esx.register({
  Component
});

const App = () => esx`<Component ...${data}/>`;

export default App;


```

## Installation

```sh
$ npm install babel-plugin-esx-ssr
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["esx-ssr"]
}
```

### Via CLI

```sh
$ babel --plugins esx-ssr script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["esx-ssr"]
});
```

## Requirements

This plugin is for `esx` v2.x.x.

## Contributions

`esx` is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/esxjs/esx/blob/master/CONTRIBUTING.md) file for more details.



## Licence

MIT
