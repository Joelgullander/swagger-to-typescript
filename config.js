module.exports = {
    GIT_SSH_COMMAND: process.env.GIT_SSH_COMMAND || null,
    swaggers: process.env.SWAGGER_LIST ? process.env.SWAGGER_LIST.split(',') : []
}