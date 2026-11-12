import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, basename } from 'node:path';
import { spawn } from 'node:child_process';

const port = Number(process.env.LINGKOD_PORT ?? 4173);
const host = '127.0.0.1';
const origin = 'http://' + host + ':' + port;
const root = new URL('./dist/', import.meta.url);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  let file;
  try {
    const pathname = decodeURIComponent(new URL(request.url, origin).pathname);
    file = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (file !== basename(file) || !/^[\w.-]+$/.test(file) || !Object.hasOwn(mime, extname(file))) {
      response.writeHead(404).end('Not found');
      return;
    }
    const body = await readFile(new URL(file, root));
    response.writeHead(200, {
      'Content-Type': mime[extname(file)], 'Content-Length': body.length,
      'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'GET' ? body : undefined);
  } catch (error) {
    if (error.code === 'ENOENT' || error instanceof URIError) response.writeHead(404).end('Not found');
    else response.writeHead(500).end('Could not serve file');
  }
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? 'Port ' + port + ' is in use. Close the other launcher or set LINGKOD_PORT.' : error.message);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log('Lingkod Presenter is ready at ' + origin + '/');
  console.log('Keep this window open while presenting. Press Ctrl+C to stop.');
  if (process.platform === 'win32' && process.argv.includes('--open')) {
    const browser = spawn('rundll32.exe', ['url.dll,FileProtocolHandler', origin + '/'], { stdio: 'ignore', windowsHide: true });
    browser.on('error', () => console.log('Open the address above in your browser.'));
  }
});
