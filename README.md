This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and
[a9g-starter](https://github.com/ahoendgen/nextjs-a9g-starter).

## Install

```bash
yarn create next-app NAME -e https://github.com/ahoendgen/nextjs-a9g-starter
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- Component generation with [@a9g/plop-generator-react-atomic-component](https://npmjs.com/package/@a9g/plop-generator-react-atomic-component) `yarn make`
- Path aliases
  - `@app` - `src/app/`
  - `@components` - `src/components/`
  - `@framework` - `src/framework/`
- Fine-tuned ESLint configuration
- Volta pinned Node and Yarn versions

## Packages

- [swr](https://npmjs.com/package/swr)

### Dev

- [@a9g/plop-generator-react-atomic-component](https://npmjs.com/package/@a9g/plop-generator-react-atomic-component)
- [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser)
- [eslint-config-next](https://npmjs.com/package/eslint-config-next)
- [eslint-config-prettier](https://npmjs.com/package/eslint-config-prettier)
- [eslint-import-resolver-typescript](https://npmjs.com/package/eslint-import-resolver-typescript)
- [eslint-plugin-import](https://npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-simple-import-sort](https://npmjs.com/package/eslint-plugin-simple-import-sort)
- [plop](https://npmjs.com/package/plop)
- [prettier](https://npmjs.com/package/prettier)
