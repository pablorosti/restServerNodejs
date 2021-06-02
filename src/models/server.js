const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.usersRoutes = '/api/usuarios';
        
        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Reading and parsing the body
        this.app.use( express.json() );

        //Directory public
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersRoutes, require('../routes/user'));
    }
    
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('servidor corriendo en el puerto ', process.env.PORT)
        })
    }
}

module.exports = Server;