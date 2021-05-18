import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { WordpressData } from 'scully-wordpress-plugin';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { getDelayAngularPlugin } from '@flowaccount/scully-plugin-angular-delay';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';


const sitemapPlugin = getSitemapPlugin();

setPluginConfig( sitemapPlugin, {
  urlPrefix: 'https://arsdiary.netlify.app/',
  sitemapFilename: 'sitemap.xml',
  merge: false,
  trailingSlash: false,
});

const postRenderers = [
  MinifyHtml,
  getDelayAngularPlugin({
    tsConfigPath: 'tsconfig.json',
    delayMilliseconds: 1500
  })
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
  routes: {
    '/:post-slug': {
      type: WordpressData,
      url: 'https://arsdiary.xyz',
      'post-slug': {
        data: 'posts',
        property: 'slug'
      }
    }
  },
  defaultPostRenderers: postRenderers
};
