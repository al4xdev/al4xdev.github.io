import { createReadStream } from 'node:fs';
import { lstat, realpath } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, normalize, relative, resolve } from 'node:path';

const CONTENT_TYPES = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

export async function startStaticServer({ root = process.cwd(), port = 0 } = {}) {
  const canonicalRoot = await realpath(root);
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const requested = pathname.endsWith('/') ? `${pathname}index.html` : pathname;
      const candidate = resolve(canonicalRoot, normalize(requested).replace(/^[/\\]+/, ''));
      const pathFromRoot = relative(canonicalRoot, candidate);

      if (pathFromRoot.startsWith('..') || pathFromRoot === '') {
        response.writeHead(403).end('Forbidden');
        return;
      }

      const stats = await lstat(candidate);
      if (!stats.isFile()) {
        response.writeHead(404).end('Not found');
        return;
      }

      response.writeHead(200, {
        'Cache-Control': 'no-store',
        'Content-Type': CONTENT_TYPES.get(extname(candidate)) || 'application/octet-stream',
        'X-Content-Type-Options': 'nosniff',
      });
      createReadStream(candidate).pipe(response);
    } catch {
      response.writeHead(404).end('Not found');
    }
  });

  await new Promise((resolveReady, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolveReady);
  });

  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Static server has no TCP address.');

  return {
    origin: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolveClose, reject) => {
      server.close((error) => (error ? reject(error) : resolveClose()));
    }),
  };
}
