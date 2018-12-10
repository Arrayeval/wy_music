
const queryString = require('query-string')
const _ = require('lodash')

var config = require('../config')
const fetchReq = {}

fetchReq.get = function (url, params) {
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch (url) 
            .then((response) => response.json())
}

fetchReq.post = function (url, body) {
    var options = _.extend(config.header, {
        body: JSON.stringify(body)
    })
    return fetch(url, options)
            .then((response) => response.json())
}

export default fetchReq