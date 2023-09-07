# Luminsign Developer Docs

Luminsign provides a fully compliant digital signature flow, that can be integrated with your Web or mobile application in minutes. 

View the [Luminsign Docs](https://luminpdf.github.io/luminsign-docs/) online at [https://luminpdf.github.io/luminsign-docs/](https://luminpdf.github.io/luminsign-docs/). 

### Installation

This website is built using Docusaurus 2.

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
$ npx docusaurus deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

