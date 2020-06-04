const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=74d6160a875b4ed39c0a4b1a7daadafb&query=' + latitude + ',' + longitude + '&units=f'

    request({url:url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            const data = body.current
            callback(undefined,`Current temp is ${data.temperature} and chance of rain ${data.precip} and weather condition is ${data.weather_descriptions}`)
        }
    })
}

module.exports = forecast