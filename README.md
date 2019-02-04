# GraphQL-API
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=popout-square&logo=graphql&logoColor=violet)

This service is a work in progress Book API built to enable the author to exploit GraphQL.

## Getting Started
To setup **GraphQL-API**, the following should be installed on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/current/) 6 and above
- [Postgres](https://www.postgresql.org/download/) Database or create an Online [Elephant sql](https://www.elephantsql.com/) database
- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker-desktop)

If you don't have these already, click on any of them to install it on your local machine.

### Installing

If you have all the prerequisites you can use the steps below to setup a local copy.

- **Install Prisma**
```
$ npm install -g prisma
```

- **Clone the repository**
```
$ git clone https://github.com/chukwuemekachm/GraphQL-API.git
```

- **Set up Docker & Prisma**
Now let's navigate into our project directory and create the `.env` file
```
touch .env
cp .env.example .env
```

Update with `.env` file with the appropriate credentials replacing the placeholders.

Update the `prisma.yml` file with the port you have chosen for your prima service in this format `http://<your-host>:<your-port>`.


Next, we will compose our docker container and deploy our prisma service to the container
```
docker-compose up -d
prisma deploy
```

You should see a message something similar to this, depending on your env variables
```
Your Prisma GraphQL database endpoint is live:

  HTTP:  http://<your-host>:<your-port>
  WS:    ws://<your-host>:<your-port>


post-deploy:
Generating schema... 44ms
```

Update your `.env` file with the Prisma API endpoint
Now run this to start your server
```
$ npm run dev
```

## Built With

- [graphql-yoga](https://github.com/prisma/graphql-yoga)
- [prisma](https://www.prisma.io/)
- [graphql-shield](https://github.com/maticzav/graphql-shield)
- [class-validator](https://github.com/typestack/class-validator)
- [prettier](https://prettier.io/)

## Author

* **Chima Chukwuemeka** [@chukwuemekachm](https://github.com/chukwuemeka)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
