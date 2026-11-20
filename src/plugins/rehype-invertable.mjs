/**
 * Rehype plugin that converts a `[invertable]` marker in an image's title or alt
 * attribute into the `invertable` CSS class while stripping the marker text.
 */
export default function rehypeInvertable() {
  function walk(node) {
    if (!node || typeof node !== 'object') return;

    if (node.type === 'element' && node.tagName === 'img' && node.properties) {
      const title = typeof node.properties.title === 'string' ? node.properties.title : '';
      const alt = typeof node.properties.alt === 'string' ? node.properties.alt : '';
      const marker = /\s*\[invertable\]\s*/gi;

      if (marker.test(title) || marker.test(alt)) {
        if (title) {
          const cleanedTitle = title.replace(marker, ' ').trim();
          if (cleanedTitle) {
            node.properties.title = cleanedTitle;
          } else {
            delete node.properties.title;
          }
        }
        if (alt) {
          node.properties.alt = alt.replace(marker, ' ').trim();
        }

        const existing = Array.isArray(node.properties.className)
          ? node.properties.className
          : typeof node.properties.className === 'string'
            ? node.properties.className.split(/\s+/).filter(Boolean)
            : [];

        if (!existing.includes('invertable')) {
          node.properties.className = [...existing, 'invertable'];
        }
      }
    }

    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        walk(child);
      }
    }
  }

  return (tree) => {
    walk(tree);
  };
}
