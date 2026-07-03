const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname);

const server = http.createServer((req, res) => {
  const rawPath = (req.url || '/').split('?')[0].split('#')[0];
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('400 Bad Request');
    return;
  }

  const requestPath = decodedPath === '/' ? 'index.html' : decodedPath.replace(/^[/\\]+/, '');
  const normalizedPath = path.normalize(requestPath);
  const filePath = path.resolve(rootDir, normalizedPath);
  const normalizedRoot = rootDir.toLowerCase();
  const normalizedFilePath = filePath.toLowerCase();

  if (normalizedFilePath !== normalizedRoot && !normalizedFilePath.startsWith(`${normalizedRoot}${path.sep}`)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.gif': 'image/gif',
      '.json': 'application/json'
    };
    
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
