# Bananasign Developer Docs

Bananasign provides a fully compliant digital signature flow, that can be integrated with your Web or mobile application in minutes. 

View the [Bananasign Docs] online at [https://luminpdf.github.io/bananasign-docs/](https://luminpdf.github.io/bananasign-docs/)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

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
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
