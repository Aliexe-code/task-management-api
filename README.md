<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# NestJS Task Management API

Task Management API built with [Bun](https://bun.sh/) [NestJS](https://nestjs.com/), [Fastify](https://www.fastify.io/), [Prisma](https://www.prisma.io/), and PostgreSQL. This project demonstrates in modern backend development using TypeScript.



- **Authentication Module**
  - User registration
  - Login with JWT authentication
  - Refresh token functionality
  - Logout endpoint
- **Task Management Module**
  - CRUD operations for tasks
- **User Module**
  - User data retrieval and management
- **Database Integration**
  - Uses Prisma ORM with PostgreSQL
  - **Security & Performance**
  - Fastify HTTP adapter for high performance
  - Security headers with Helmet
  - Logging with nestjs-pino

## Technologies Used

- **Framework:** NestJS
- **Runtime**:** Bun 
- **HTTP Adapter:** Fastify
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Tokens)
- **Language:** TypeScript
- **Logging:** nestjs-pino

## Getting Started

### Prerequisites
-   **Bun:** v1.1 or later OR  **Node.js:** v14 or later
- **PostgreSQL:** Ensure you have a running PostgreSQL database (cloud Pg neon account or pgAdmin4 on your local machine or any other option)
- **Bun** : is promising runtime for javascript and they claimed that it will replace nodejs , the thing that not every one knows that Bun works also as a package manager which has great performance according to pnpm or yarn or npm
  but in production cases my be different nodejs is stable and well known 

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/nestjs-task-management-api.git
   cd nestjs-task-management-api
   bun install || npm install
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydatabase?schema=public"JWT_SECRET="yourSuperSecretKey" (# I use cloud pg neon)
   bunx prisma migrate dev --name init
   bunx prisma generate
   bunx prisma studio
   bun run start:dev || npm ( as you like)


