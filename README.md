# Amazonas

> copy of Amazon product page - review section

## Related Projects

  - https://github.com/team-arendelle/vinnyA3-add-to-cart
  - https://github.com/team-arendelle/stephenjmark-product-details-summary
  - https://github.com/team-arendelle/vinnyA3-proxy
  - https://github.com/team-arendelle/stephenjmark-proxy
  - https://github.com/team-arendelle/RossHathaway-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This will render to html element with id of reviews
> Server serves bundle.js in client/public/bundle.js on GET request to /bundle
> Server serves review component on GET request to /:prodId/:recent (recent is true or false for whether reviews are sorted by date or helpfulCount - default is helpfulCount)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Dependancy Manager - NPM
- JS Version - ES6

FRONT END:
- Asset Compilation and Loading - Webpack and Webpack-Dev-Server
- MVC - React
- Sass
- Bootstrap

SERVER: 
- MVC - Express

DATABASE: 
- SQLite

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

