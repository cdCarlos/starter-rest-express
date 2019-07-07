# starter-rest-express

Starter REST project using Express & TypeScript

## Usage

### Install Dependencies

Open a terminal inside the project's folder and run the following command to install required npm packages:

```bash
$ npm install
```

### Config

At `src/config/config.ts` you can find multiple properties for configuration, for development you can customize this values creating a `.env` file in the root folder with the properties required for your development environment.

Your `.env` may contain something like this:

```
NODE_ENV = production
PORT = 8080
LOG_LEVEL = common
CORS_HOST = localhost
CORS_PORT = 8100
CORS_HEADERS = Origin, X-Requested-With, Content-Type, Accept, Authorization
```

> **NOTE:** For more `LOG_LEVEL` options see [morgan](https://www.npmjs.com/package/morgan).

When running in production environments, instead of creating the `.env` file, you should create the configuration properties as environment variables. One possible way to do so could be something like this:

```bash
$ PORT=239482 USER_KEY=foobar node app.js
```

> **NOTE:** how you define environment variables depends on your OS. Search

### Run

In your terminal, run any of the following commands:

-   Development mode: `npm run dev`
-   Production mode: `npm run prod`

Additional commands:

-   Compile to JS: `npm run tsc`
-   Build for deployment (AWS EB): `npm run build`
-   Clean output folder (www): `npm run clean`

## License

[MIT](LICENSE)
