import { startStaticServer } from '../tools/static-server.mjs';

const server = await startStaticServer({ port: 4173 });
console.log(`Portfolio test server listening at ${server.origin}`);

const close = async () => {
  await server.close();
  process.exit(0);
};

process.on('SIGINT', close);
process.on('SIGTERM', close);
