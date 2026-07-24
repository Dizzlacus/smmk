/** Prefix a site-root path with Astro's configured `base` (e.g. `/smmk/` on GitHub Pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  const normalized = path.replace(/^\//, '');
  return `${baseWithSlash}${normalized}`;
}
