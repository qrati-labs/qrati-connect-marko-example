# Thanks for checking out Marko

# Installation

```
pnpm init marko -- --template basic
cd marko-app
pnpm install
pnpm run dev
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `pnpm run dev` to start the development server
- Run `pnpm run build` to build a production-ready node.js server
- Run `pnpm run preview` to run the production server

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files. Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).
