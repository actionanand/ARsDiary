# ARsDiary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Scully - How to run locally
 - Run `ng build` or `ng build --watch` to build the angular app
 - Run `npm run scully -- --scanRoutes` to scan the Routes (have to run whenever new routes are there)
 - Run `npm run scully` (have to run after building the app)
 - Run `npm run scully -- --watch`
 - If the above commend didn't open in watch mode, then Run `npm run scully:serve` and open Scully [Static server](http://localhost:1668/).
 - set `build:scully` as a command for production to start the app in the server

 ## Scully - Help
 - [Scully official](https://scully.io/)
 - [JAMstack Static Site generator](https://jamstack.org/generators/)
 - [Netlify](https://www.netlify.com/)

## Scully miscellaneous - Help
- [Scully wordpress plugin](https://www.npmjs.com/package/scully-wordpress-plugin)
- [Scully plugin angular delay](https://www.npmjs.com/package/@flowaccount/scully-plugin-angular-delay)
- [Scully Plugin Sitemap](https://www.npmjs.com/package/@gammastream/scully-plugin-sitemap)
- [NPM Install Peer](https://www.npmjs.com/package/npm-install-peers)

## Troubleshooting
### How to kill server when seeing “EADDRINUSE: address already in use”

1. To find the process id (PID) associated with the port

`lsof -i tcp:1668`

It'll display as below. Please note down the PID from that

```COMMAND PID   USER  FD  TYPE DEVICE             SIZE/OFF NODE NAME`` 
```node    44475 chen5 31u IPv4 0x8b1721168764e4bf 0t0 TCP *:strexec-s (LISTEN)```

2. Then to kill the process by PID

`kill -9 44475`

-[source](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
