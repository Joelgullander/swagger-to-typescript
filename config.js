module.exports = {
    GIT_USER: process.env.GIT_USER || 'Joelgullander',
    GIT_PASSWORD: process.env.GIT_PASSWORD || 'Cuma4617',
    swaggers: process.env.SWAGGER_LIST ? process.env.SWAGGER_LIST.split(',') : ['http://localhost:5000']
}