setTimeout(() => {
  console.log("SetTimeout 2");
}, 2000);

const geoCode = (inputData, callBack) => {
    setTimeout(() => {
        console.log("geoCode SetTimeout 2");
        const data = {
            latitude: 0,
            longitude: 0
        }
        return callBack(data);
      }, 2000);

};

 geoCode("test", (data) => {
    console.log(data);
});

const add = (input1, input2, callback) => {
      setTimeout(() => {
        return callback(input1 + input2);
      }, 2000);
}

add(4, 6, (data) => {
    console.log(data);
});


// query = lat,lon or city
const latlon='';
const url = 'http://api.weatherstack.com/current?access_key=9ae195a94eed796aadf6f2d7c48eb85e&query=12.983,77.583&units=f';

request({url: url, json: true }, (error, response) => {
    
    if(error){
        console.log(chalk.red("Unable to connect to Weather Service"));
    }
    if(response && response.body.error){
        console.log(chalk.red(response.body.error.info));
    }else if((response && response.body)){
        console.log(
            chalk.green.inverse(response.body.current.weather_descriptions[0]+
              ". Its currently",response.body.current.temperature,"degrees out. There is a",response.body.current.feelslike ,"% chance of raining"));
    }
  
  
});

//GeoCode Url 
const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?access_token=pk.eyJ1Ijoia3VtYXIyMmJtcyIsImEiOiJja2MzYTNkcGoxc202MnNuNGJjcm52NWc1In0.hZpmdnVRizAwRNOS3j_f_A&limit=1';

request({url: geoCodeUrl, json: true }, (error, response) => {
    if(error) {
        console.log(chalk.red("Unable to connect to GeoCode Service"));
    } 
    if(response && response.body) {
        const bodyCont = response.body;
        if(bodyCont.features.length === 0) {
            console.log(chalk.red("No active data for given input"));
        } else {

         console.log(
            chalk.blue.inverse(
              "Lat,Lon : ",bodyCont.features[0].center[1] +", ",bodyCont.features[0].center[0]));
            }
    }
    
  });
