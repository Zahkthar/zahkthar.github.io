import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightKatex } from 'starlight-katex';
import rehypeInvertable from './src/plugins/rehype-invertable.mjs';

const isProd = process.env.NODE_ENV === 'production';

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
            {
              label: 'Électronique analogique',
              autogenerate: { directory: 'electronics/analog' },
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
        ...(isProd
          ? [
              {
                tag: 'script',
                attrs: {
                  defer: true,
                  src: 'https://cloud.umami.is/script.js',
                  'data-website-id': '3a2e9441-4b4d-41a3-9f79-1dbfad336c77',
                  'data-domains': 'zahkthar.fr',
                },
              },
            ]
          : []),
      ],

      plugins: [starlightKatex()],
      customCss: ['/src/res/styles/custom.css'],
    }),
  ],
});
