import { startStaticServer } from '../tools/static-server.mjs';

const port = Number.parseInt(process.env.PORTFOLIO_TEST_PORT || '4173', 10);
const server = await startStaticServer({ port });
console.log(`Portfolio test server listening at ${server.origin}`);

const close = async () => {
  await server.close();
  process.exit(0);
};

process.on('SIGINT', close);
process.on('SIGTERM', close);
