// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://hisakazu.dev',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langAlias: { rs: 'rust', ts: 'typescript', cts: 'typescript', mts: 'typescript' },
    },
  },
});
