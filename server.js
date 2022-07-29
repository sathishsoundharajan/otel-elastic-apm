
require('./tracing');

const Hapi = require('hapi');

async function main() {

  const server = Hapi.server({ port: 9110 });

  server.route({
    method: 'GET',
    path: '/',
    handler: function() {
      return 'Ok'
    }
  })
  
  await server.start();

  console.log('Server started at: ' + server.info.uri);
}

main().catch(console.error);