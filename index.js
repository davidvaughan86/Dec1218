const http = require("http");
const express = require("express");
const morgan = require('morgan')
const es6Renderer = require('express-es6-template-engine')
const data = require('./templates/data.json')
console.log(data) // good practice to see if the data is loading

const app = express();
const server = http.createServer(app);
const logger = morgan('dev')



app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine', 'html');

const PORT = 5000;
const homeRouter = require('./routers/home');


app.use(logger);
app.use('/', homeRouter);


app.get('/movies' , (req,res) => {
    // res.send(data)
    const movieHtmlArray = [];
    for (let d of data) {
        movieHtmlArray.push(`<p> ${d.name} </p>`);
    
        }
        const movieHtmlString = movieHtmlArray.join('');
        console.log(movieHtmlString)
        res.render('movies' , {
            locals: {
                movie: movieHtmlString
            }
        })
    });



// app.use('/' , homeRouter);
// app.get('/' ,(req,res) => {
//     res.send('<h1> hello world</h1>')
// });

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)

});

