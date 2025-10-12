import express from'express';
import cors from 'cors';
import indexRoutes from '../routes/index.routes.js'

export default class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT || 3000;
        this.generalRoute= '/api';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());   

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        localhost:0o0/api/ejemplo
        this.app.use(this.generalRoute,require('../routes/index.routes.js'));
       
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',this.port);
        });
    }
}