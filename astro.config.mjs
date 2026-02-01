import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { starlightKatex } from 'starlight-katex';

const googleAnalyticsId = 'GTM-K85GLNJ6'

export default defineConfig({
  site: 'https://zahkthar.fr',
  integrations: [
    starlight({
      title: 'Zahkthar',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      defaultLocale: 'root',

      sidebar: [
        {
          label: 'Electronique',
          translations: {
            'en': 'Electronics',
          },
          items: [
            {
              label: 'Les bases de l\'électronique',
              translations: {
                'en': 'Electronics for beginners',
              },
              autogenerate: { directory: 'electronics/basics' },
            }
          ]
        }
      ],

      head: [
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