/**
 * AJAX
 * =====
 * Asynchronous Javascript and Xml
 * - Making request to load or send information on page the page 
 * - behing the scene without any intervention.
 */

const data = `{"ticker":{"base":"BTC","target":"USD","price":"40309.77676970","volume":"11620.57574490","change":"-220.55994308","markets":[{"market":"BitFinex","price":"40297.00000000","volume":1738.08123864},{"market":"Bitstamp","price":"40289.69000000","volume":428.10596622},{"market":"Bittrex","price":"40224.39000000","volume":52.21022362},{"market":"Cex.io","price":"40233.10000000","volume":14.34464373},{"market":"Exmo","price":"43593.88000000","volume":227.89130854},{"market":"Hitbtc","price":"40231.87000000","volume":8395.59091},{"market":"Kraken","price":"40233.30000000","volume":764.08235411},{"market":"YoBit","price":"41995.50000000","volume":0.26910004}]},"timestamp":1650122284,"success":true,"error":""}`

/** How to make the Json data to an object
 * console.log(JSON.parse(data))
 */

const parsedData = JSON.parse(data)

/**
 * How to turn information that is Javascript object into Json
 * - Useful when we want to send information to an api and that api want to send that information as api
 */
const stringifiedData = JSON.stringify(parsedData) // turn it into a json string

const dog = {
    breed: 'Lab',
    color: 'black',
    isAlive: true,
    owner: undefined,
    tag: NaN
}

JSON.stringify(dog) // '{"breed":"Lab","color":"black","isAlive":true,"tag":null}'

/**
 * Anatomy of HTTP Request
 */