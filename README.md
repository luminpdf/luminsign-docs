# Lumin API Documentation

This repository contains the code for the [Lumin API documentation](https://www.luminpdf.com/lumin-sign/). The Lumin API is a suite of tools designed to seamlessly integrate document workflows into your applications. Beyond our robust digital signature solution, Lumin Sign, the API provides powerful functionalities for document editing, real-time collaboration, and workflow automation.

Our REST-based API is easy to integrate, allowing you to focus on creating the best experience for your users while we handle the complexities of document management, security, and compliance.

The documentation website is built using [Docusaurus 2](https://docusaurus.io/).

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
