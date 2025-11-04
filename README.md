# Nigeria States → LGAs → Towns (Data package)

Dataset and helpers for Nigerian states, their capitals, Local Government Areas (LGAs), and towns/cities. Built for developers who need a dependable, copy‑paste‑ready source of Nigerian administrative data.

[![npm version](https://img.shields.io/npm/v/nigeria-state-lga-data.svg?color=%23007ec6)](https://www.npmjs.com/package/nigeria-state-lga-data)
[![npm downloads](https://img.shields.io/npm/dm/nigeria-state-lga-data.svg)](https://www.npmjs.com/package/nigeria-state-lga-data)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/CodeLeom/nigeria-state-city-lga/blob/main/LICENSE)

## Quick links

- **Install**: [Installation](#installation)
- **Use it**: [Usage](#usage)
- **Data shape**: [Data reference](#data-reference)
- **Contribute**: [Contributing](#contributing)
- **Dev setup**: [Local development](./CONTRIBUTION.md#local-development)

## Features

- Comprehensive list of states, capitals, LGAs, and towns
- Stable JS helpers for common lookups
- Lightweight package, easy to integrate

## Installation

```bash
npm install nigeria-state-lga-data
# or
yarn add nigeria-state-lga-data
```

Node: works on current LTS releases. The library is published as CommonJS. You can use it in any JavaScript project (Node.js directly, or via bundlers like Vite/Webpack). For browser usage, bundle it with your app.

## Usage

### CommonJS (Node.js)

```javascript
const {
  getStates,
  getStatesAndCapitals,
  getLgas,
  getTowns,
  getCapital,
  getState,
  getStatesData,
} = require('nigeria-state-lga-data');

console.log(getStates());
console.log(getStatesAndCapitals());
console.log(getLgas('Lagos'));
console.log(getTowns('Lagos'));
console.log(getCapital('Kano'));
console.log(getState('Rivers'));
console.log(getStatesData());
```

### ES Modules

```javascript
import pkg from 'nigeria-state-lga-data';
const {
  getStates,
  getStatesAndCapitals,
  getLgas,
  getTowns,
  getCapital,
  getState,
  getStatesData,
} = pkg; // CJS default export → destructure helpers

console.log(getStates());
```

## Data reference

The primary dataset lives in `data/nigeria.json` and follows this structure:

```json
{
  "states": [
    {
      "name": "Abia",
      "capital": "Umuahia",
      "lgas": ["Aba North", "Aba South", "Arochukwu", "Bende", "..."] ,
      "towns": ["Aba", "Umuahia", "Ohafia", "..."]
    }
  ]
}
```

Minimal example of a single state object:

```json
{
  "name": "Lagos",
  "capital": "Ikeja",
  "lgas": ["Agege", "Alimosho", "Eti-Osa", "Ikeja", "Ikorodu", "..."],
  "towns": ["Ikeja", "Lekki", "Ikorodu", "Epe", "Badagry", "..."]
}
```

Notes:

- Towns are currently listed at the state level (not per LGA).

## API (helpers)

From `index.js`:

| Helper | Params | Returns | Description | Notes |
| :-- | :-- | :-- | :-- | :-- |
| `getStates` | `()` | `string[]` | List of all state names. | Order matches dataset. |
| `getStatesAndCapitals` | `()` | `{ state: string; capital: string }[]` | Pairs of state and capital. | Useful for dropdowns. |
| `getLgas` | `(state: string)` | `string[]` | LGAs for a given state. | Case-insensitive; returns `[]` if not found. |
| `getTowns` | `(state: string)` | `string[]` | Towns/cities for a given state. | Case-insensitive; returns `[]` if not found. |
| `getCapital` | `(state: string)` | `string` | Capital name for a given state. | Returns `''` if not found. |
| `getState` | `(state: string)` | `{ name: string; capital: string; lgas: string[]; towns: string[] } \| null` | Full state record. | Returns `null` if not found. |
| `getStatesData` | `()` | `{ name: string; capital: string; lgas: string[]; towns: string[] }[]` | Full dataset shallow-copied per state. | Safe to read and map. |

## Contributing

Want to contribute data or improvements? See [CONTRIBUTION.md](./CONTRIBUTION.md) for the full guide, dev setup, and PR checklist.

## Release and versioning

We follow SemVer. Non-breaking data additions are minor bumps; breaking shape changes are major bumps. Changelog entries go in PR descriptions and release notes.

## Issues

Found a problem or need help? Open an issue on GitHub.

## License

MIT — see [LICENSE](./LICENSE).

If this project helps you, please ⭐️ the repo and share it.
