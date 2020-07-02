const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ae195a94eed796aadf6f2d7c48eb85e&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f';

    request({url, json: true }, (error, {body}) => {
        if(error){
            callback("Unable to connect to Weather Service", undefined);
        }
        if(body.error){
            callback(body.error.info, undefined);
        }else if(body){
            callback(undefined, body.current.weather_descriptions[0]+
                  ". Its currently "+body.current.temperature+" fahrenheit out. There is a "+body.current.feelslike +"% chance of raining");
        }
      
      
    });

};

module.exports = forecast;

