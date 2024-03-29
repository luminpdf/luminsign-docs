# Lumin API Documentation

This repo contains the code for the [Lumin API documentation](https://luminpdf.github.io/luminsign-docs/). 
The Lumin API allows customers to send documents via [Lumin Sign](https://www.luminpdf.com/lumin-sign/). 

This website is built using [Docusaurus 2](https://docusaurus.io/).

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
