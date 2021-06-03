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
- [Ng Wp Components](https://www.npmjs.com/package/ng-wp-components)
- [Scully Wordpress Plugin](https://www.npmjs.com/package/scully-wordpress-plugin)
- [ScullyInterceptor](https://www.npmjs.com/package/scully-interceptor)
- [Scully plugin angular delay](https://www.npmjs.com/package/@flowaccount/scully-plugin-angular-delay)
- [Scully Plugin Sitemap](https://www.npmjs.com/package/@gammastream/scully-plugin-sitemap)
- [Scully Plugin Minify HTML](https://www.npmjs.com/package/scully-plugin-minify-html)
- [NPM Install Peer](https://www.npmjs.com/package/npm-install-peers)

## Troubleshooting
### How to kill server when seeing “EADDRINUSE: address already in use”

1. To find the process id (PID) associated with the port

`lsof -i tcp:1668`

It'll display as below. Please note down the PID from that

`COMMAND PID   USER  FD  TYPE DEVICE                SIZE/OFF NODE NAME`\
`node    44475 chen5 31u IPv4 0x8b1721168764e4bf 0t0 TCP *:strexec-s (LISTEN)`

2. Then to kill the process by PID

`kill -9 44475`

-[source](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d)

## Wordpress Rest API - help
1. Make sure `permalink` is updated to post name (Settings -> permalinks) `https://your-site-name/wp-admin/options-permalink.php`
2. Please install the wp plugin [WP-REST-API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/) to support menu options in api.
3. Some API endpoints for help
- To go to admin page: `https://your-site-name/wp-admin`
- To check whether REST API is enabled or not : `https://your-site-name/wp-json`
- If REST API is not enabled, Please check point number 1.
- To check categories: `https://your-site-name/wp-json/wp/v2/categories`
- To check posts: `https://your-site-name/wp-json/wp/v2/posts` , `https://your-site-name/wp-json/wp/v2/posts?per_page=100`
- To check pages: `https://your-site-name/wp-json/wp/v2/pages`
- To check home post slug: `https://your-site-name/wp-json/wp/v2/pages?slug=home`

## Other Wordpress plugins

- [JAMstack Deployments](https://wordpress.org/plugins/wp-jamstack-deployments/)
- [WP-REST-API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)
- [Code Snippets](https://wordpress.org/plugins/code-snippets/)
1. [How to Add Excerpts to Your Pages in WordPress](https://www.wpbeginner.com/plugins/add-excerpts-to-your-pages-in-wordpress/)
2. [What, Why, and How-To’s of Creating a Site-Specific WordPress Plugin](https://www.wpbeginner.com/beginners-guide/what-why-and-how-tos-of-creating-a-site-specific-wordpress-plugin/)
- [WP Reset](https://wordpress.org/plugins/wp-reset/)
- [All-in-One WP Migration](https://wordpress.org/plugins/all-in-one-wp-migration/)
- [WP fail2ban](https://wordpress.org/plugins/wp-fail2ban/)
- [Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/)
- [UpdraftPlus WordPress Backup Plugin](https://wordpress.org/plugins/updraftplus/)
- [Sassy Social Share](https://wordpress.org/plugins/sassy-social-share/)
- [Redirection](https://wordpress.org/plugins/redirection/)
- [24 Must Have WordPress Plugins from WP BEGINNER](https://www.wpbeginner.com/showcase/24-must-have-wordpress-plugins-for-business-websites/)
- [25 Best WordPress Plugins from Website setup](https://websitesetup.org/best-popular-wordpress-plugins/)
- [9 Powerful WordPress Migration Plugins](https://kinsta.com/blog/wordpress-migration-plugins/)
- [9 Best WordPress Migration Plugins (Compared)](https://www.wpbeginner.com/showcase/best-wordpress-migration-plugins-compared/)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
