# Mosaic Game

## Introduction

The goal of this project is to generate a mosaic of 10x10 tiles which allows participants to change the color of a single tile.
When multiple participants are concurrently playing the game, the mosaic should update when one of the players changes the color of a tile.

## Technologies

## [Next.js](https://nextjs.org/)

Next.js is a react based framework with server side component for data fetching purposes. Next.js support Typescript and the project is setup with typescript.
The server side component of the application is in the same code base and can be found under pages/api

## [Prisma](https://www.prisma.io/)

prisma is a lightwight ORM for typescript. The Serverside component is using prisma with a sqlite database to store the state of the mosaic.

## [SWR](https://swr.vercel.app/)

SWR is an library which makes fetching data from an API easy.

## Summary

Your job is to implement the basic application. The purpose of the selected technologies and scaffolding is to make the job easier for you. You can use other technologies to implement the solution if think you are faster with a different technology stack. frontend and backend has to be written in typescript and the frontend has to be a react based framework.

You should spend a maximum of 4 hours on that project. Less would be more ideal.
We would like you to produce clean code. If you there's lefover time you are welcome to add tests.

## How to get started

Install dependencies

```
npm install
```

Prepare and seed database

```
npx prisma db push
npx prisma db seed
```

Start dev server

```
npm run dev
```

reset the database

```
npx prisma migrate reset
```
