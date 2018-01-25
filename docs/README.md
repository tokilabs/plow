# Introduction

Plow is a library to help you create Domain-Driven Design, Event Sourcing and CQRS applications in node. It's **not a framework**!
That means you get to pick and choose what you want to use in your app.
It's written in TypeScript and heavily relies on class extension and decorators to make your job easier.

If you don't know what DDD, ES and CQRS are, read the [Concepts Overview](concepts.md) them come back here.

Plow is a low level library, the least depencies your domain have, the better. Actually some argue your domain shouldn't have any
external dependencies. We think plow is a good exception because all we did was extract common implementation patterns we across projects
into classes that are as generic as they can be.

Because of that, Plow can be used with any structural framework you want. If you are building an API, we recommend [Hapi](https://hapijs.com),
it's tailored to that job. But you can use Express, koa, or any other framework you want.

## Plow Structure

When we say you can pick and choose, we mean it! If all you want is to use CQRS, go ahead and grad `Command`, `CommandBus`,
`Event` and the `EventBus` and you are all set. You'll get to react to events delivered in memory or via RabbitMQ.

The implemented concepts rely on each other, though. For example, Event Sourcing uses CQRS structure to propagate events.

## Installation

As simple as it gets:

```sh
yarn add @cashfarm/plow
```

or

```sh
npm i @cashfarm/plow
```

## Example App (the infamous ToDo)


