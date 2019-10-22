let express = require('express');
let app = express();
let cors = require('cors');
app.use(cors());
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
let filmRout = require('./routes/FilmRout');
app.use('/films',filmRout);

    app.listen(8080,()=>{
    console.log('server work');
})
