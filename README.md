# OWLtop. React and NextJS application

A project for learning React and NextJS.

Basic aspects:

    1. SSR and SSG work on NextJS framework example

    2. Adaptive layout on CSS Grid

    3. Learning React hooks

    4. Application accessibility and working with ARIA attributes

## Getting Started

To install the project, you need to clone the repository to your device.

You need to install all missing dependencies using the command.

```bash
$ npm i
```

The application interacts with the open API - `https://courses-top.ru`.

After cloning the repository, create an `.env.local` file in the main directory and add the following line to it.

`NEXT_PUBLIC_DOMAIN=https://courses-top.ru`

## Running the app

Launching an application in development mode.

```bash
$ npm run dev
```

Open http://localhost:3000 with your browser to see the result.

Launching the application in production.

```bash
# initially, you need to build an application
$ npm run build

# you can now run the application
$ npm start
```

Other launch scripts.

```bash
# launch linter for .js/.ts/.jsx/.tsx files
$ npm run lint

# launch linter for CSS files
$ npm run stylelint
```
