const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const port = process.env.PORT ? process.env.PORT : 4000;
console.log("PORT: "+process.env.PORT);


//console.log(path.join(__dirname,'../static'));

//Define paths for express config
const staticFileDirectory = path.join(__dirname,'../static');
const viewsPathDirectory = path.join(__dirname, '../templates/views');
const partialPathDirectory = path.join(__dirname, '../templates/partials');
const app = express();


//setup handle bar engine & views location
app.set('view engine','hbs');
app.set('views', viewsPathDirectory);
hbs.registerPartials(partialPathDirectory);

//Setup static directory to serve.
app.use(express.static(staticFileDirectory));
// app.use('/help', express.static(path.join(staticFileDirectory,'/help.html')));
// app.use('/about', express.static(path.join(staticFileDirectory,'/about.html')));

app.get('', (req, res)=> {
    res.render('index', {
        title: 'Weather Home Page',
        content: 'Use this page to find weather',
        headerTitle: 'Weather Information',
        footerTitle: 'Weather Footer Information'
    });
});

app.get('/help', (req, res)=> {
    res.render('help', {
        title: 'Weather Help Page',
        content: 'Help Page Body Content',
        headerTitle: 'Weather Header Information',
        footerTitle: 'Weather Footer Information'
    });
});

app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'Weather About Page',
        content: 'About Page Body Content',
        headerTitle: 'Weather Header Information',
        footerTitle: 'Weather Footer Information'
    });
});


app.get('/weather', (req, res) => {
    const address = req.query.address;
    console.log("Address : ", address);
    if(!address) {
       return  res.send({
            error: 'Please provide location details for find temperature'
        });

    }
    const data = geocode(address, (error, {latitude, longitude, place}={}) => {
        if(error) {
            return res.send({ error});
        }
        
        forecast(latitude=0, longitude=0, (error, data) => {
                if(error)
                    return res.send({ error });
                if(data){     
                    console.log("data: ",data);
                    return res.send({ 
                        forecast: data,
                        location: place
                    })
                }
        });
       
    });
   
});

app.get('/help/*', (req, res)=> {
    res.render('pageNotFound', {
        content: 'Help Page not found, Please try right page',
        headerTitle: 'Weather Header Information',
        footerTitle: 'Weather Footer Information'
    });
});

app.get('*', (req, res)=> {
    res.render('pageNotFound', {
        content: 'Page Not Found, Please try right page',
        headerTitle: 'Weather Header Information',
        footerTitle: 'Weather Footer Information'
    });
});

app.listen(port, () => {
    console.log("Server started at port 4000");
});