// Require the framework and instantiate it
const path = require('path')
const fs = require('fs')

// ESM
const Fastify = require('fastify')
const fastify = Fastify({
    logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
    const resolvedPath = path.join(__dirname, 'index.html')
    const stream = fs.createReadStream(resolvedPath)
    reply.type('text/html').send(stream)
})

// Run the server!
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})