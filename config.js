module.exports = {
    GIT_USER: process.env.GIT_USER || null,
    GIT_PASSWORD: process.env.GIT_PASSWORD || null,
    swaggers: process.env.SWAGGER_LIST ? process.env.SWAGGER_LIST.split(',') : []
}