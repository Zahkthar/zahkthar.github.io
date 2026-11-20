import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightKatex } from 'starlight-katex';
import rehypeInvertable from './src/plugins/rehype-invertable.mjs';

const googleAnalyticsId = 'G-RNH1Y9WEBS';

export default defineConfig({
  site: 'https://zahkthar.fr',
  markdown: {
    rehypePlugins: [rehypeInvertable],
  },
  integrations: [
    starlight({
      title: 'Zahkthar',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },

      sidebar: [
        {
          label: 'Électronique',
          items: [
            {
              label: "Les bases de l'électronique",
              autogenerate: { directory: 'electronics/basics' },
            },
          ],
        },
      ],

      components: {
        Footer: './src/components/Footer.astro',
      },

      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://zahkthar.fr/og-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://zahkthar.fr/og-image.png',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
          },
        },
        {
          tag: 'script',
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');
          `,
        },
      ],

      plugins: [starlightKatex()],
      customCss: ['/src/res/styles/custom.css'],
    }),
  ],
});
