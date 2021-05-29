import { ScullyConfig } from '@scullyio/scully';
import { WordpressData } from 'scully-wordpress-plugin';
import { MinifyHtml } from 'scully-plugin-minify-html';


// const urlScullyFull = 'https://digital.techiear.com/wp-json/wp/v2/posts?per_page=100';
const urlScully = 'https://digital.techiear.com/';
// const urlScully = 'https://wp.learnario.com';


const postRenderers = [
  MinifyHtml
];

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ARsDiary",
  outDir: './dist/static',
  puppeteerLaunchOptions: {
      args: [
        "--disable-gpu",
        "--renderer",
        "--no-sandbox",
        "--no-service-autorun",
        "--no-experiments",
        "--no-default-browser-check",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-extensions"
      ]
    },
  //   routes: {
  //   '/:post-slug': {
  //     type: 'json',
  //     'post-slug': {
  //       url: urlScullyFull,
  //       property: 'slug'
  //     }
  //   }
  // },
  routes: {
    '/:post-slug': {
      type: WordpressData,
      url: urlScully,
      'post-slug': {
        data: 'posts',
        property: 'slug'
      }
    }
  },
  defaultPostRenderers: postRenderers
};
