import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import { visit } from 'unist-util-visit';

// Custom remark plugin to rewrite links ending with .md to their clean route
function remarkRewriteMdLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url && (node.url.endsWith('.md') || node.url.includes('.md#'))) {
        let hash = '';
        let urlPart = node.url;
        const hashIdx = node.url.indexOf('#');
        if (hashIdx !== -1) {
          urlPart = node.url.substring(0, hashIdx);
          hash = node.url.substring(hashIdx);
        }
        
        if (urlPart.endsWith('.md')) {
          let base = urlPart.slice(0, -3);
          // If the link points to Home, redirect to the root path
          if (base.toLowerCase() === 'home') {
            base = '';
          } else {
            // Lowercase slugification to match Astro's default content collection slugifier
            base = base.toLowerCase();
          }
          node.url = `/${base}${hash}`;
        }
      }
    });
  };
}

export default defineConfig({
  integrations: [react()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkRewriteMdLinks],
    }),
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
