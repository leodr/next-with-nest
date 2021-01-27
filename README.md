# next-with-nest

This is an example of how to integrate a NestJS server into an API-function that
catches all requests.

## Overview

-   [Getting Started](#getting-started)
-   [Caveats](#caveats)
-   [Learn More](#learn-more)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

## Caveats

Since Next.js uses Babel for its TypeScript compilation, Nest is sometimes
missing code metadata.

E.g. Dependency Injection: You have to use the JavaScript-way of Nests DI system
with the `@Dependency`-decorator, because Nest can not detect dependencies in
the constructor arguments of a service or controller.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
    features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
