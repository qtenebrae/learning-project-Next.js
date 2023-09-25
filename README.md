# OWLtop

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://qtenebrae.github.io/learning-project-Next.js/courses/photoshop)

OWLtop is a website dedicated to online course rankings. The application is implemented with NextJS and uses an open API.

## Content

- [Intro](#intro)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the app](#running-the-app)
  - [Launching an application in development mode](#launching-an-application-in-development-mode)
  - [Build and run the application](#build-and-run-the-application)
- [Project usage](#project-usage)
  - [NPM scripts](#npm-scripts)

## Intro

This project has been carried out for educational purposes. In creating it, the following were explored:

> - React and TypeScript
> - Component creation and Reack Hooks
> - Server Side Rendering (SSR) and Static Site Generation (SSG) with NestJS
> - Adaptive layout on CSS greed
> - Application accessibility and work with ARIA attributes

To familiarise yourself with the NextJS project structure, you can use this project.

## Getting started

### Installation

Clone the repository

    git clone https://github.com/qtenebrae/learning-project-Next.js.git

Switch to the repo folder

    cd learning-project-Next.js

Installing dependencies

    npm install

### Configuration

The application works in conjunction with an open API - `https://courses-top.ru`.

In order to do this, you need to configure the project by adding the `.env.local` file to it.

    touch .env.local

You need to add a line to the file that contains the NEXT_PUBLIC_DOMAIN variable.

    echo "NEXT_PUBLIC_DOMAIN=https://courses-top.ru" >> .env.local

At this point the project is ready to go live.

## Running the app

### Launching an application in development mode

To start the application in development mode, just write the following script:

```bash
$ npm run dev
```

You will then be able to go to `http://localhost:3000` to get to the application.

### Build and run the application

First, you need to build an application.

```bash
$ npm run build
```

Once the application build is complete, you can run the application.

```bash
$ npm run start
```

## Project usage

### NPM scripts

- `lint` - start linter for .js/.ts/.jsx/.tsx files

- `stylelint` - start linter for CSS files
