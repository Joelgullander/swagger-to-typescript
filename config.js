const TEST = "http://search-service, http://recipe-service, http://reservation-sync-service, http://email-service, http://delivery-service, http://cart-service, http://customer-service, http://orderhistory-service";
console.log(TEST.split(','))

module.exports = {
    swaggers: process.env.SWAGGER_LIST ? process.env.SWAGGER_LIST.split(',') : []
}