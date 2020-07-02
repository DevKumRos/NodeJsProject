const request = require('request');


const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoia3VtYXIyMmJtcyIsImEiOiJja2MzYTNkcGoxc202MnNuNGJjcm52NWc1In0.hZpmdnVRizAwRNOS3j_f_A&limit=1';
    request({url , json: true}, (error, {body}) => {
        if(error) {
            callback("Unable to connect to GeoCode Service", undefined);
        } 
        if(body) {
            if(body.message || body.features.length === 0) {
                callback("No active data for given input", undefined);
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    place: body.features[0].place_name
                })
        }

    }

})
};

module.exports = geocode;


