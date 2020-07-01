const request = require('request');
const geocode = require('./geocode');
const forecast = require('./forecast');

const command = process.argv;
const location = command[2];
if( location ) {
    geocode(location, (error, {latitude, longitude}) => {
        if(error) {
            console.log('Error : ', error);
        }
        
        forecast(latitude=0, longitude=0, (error, data) => {
                if(error)
                    console.log("Error : ", error);
                if(data)    
                    console.log(data);
        });
       
    });
} else {
    console.log("Location data is not mentioned");
}



