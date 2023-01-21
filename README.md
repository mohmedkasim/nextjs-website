This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup next.js website steps

<div align="center">

<img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,js" style="width: 300px">

</div>

```
npx create-next-app@latest nextjs-website
```

> **Warning**
> No TypeScript, No ESLint, Yes use src/ directory, Yes use experimental app/ directory

Result:

```npm
Installing dependencies:
- react
- react-dom
- next
- @next/font
```

```
npm install -D tailwindcss
```

```
npx tailwindcss init
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Cpanel

[Follow deploy in cpanel](https://medium.com/@geevadon/how-to-deploy-a-next-js-app-on-cpanel-efficiently-c00c5eb860de)