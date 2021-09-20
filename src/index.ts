import { useAnimation } from '@angular/animations';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import participantesRoutes from './routes/participantesRoutes';
import cursosRoutes from './routes/cursosRoutes';
import certificadosRoutes from './routes/certificadosRoutes';
import loginRoute from './routes/loginRoutes';
import logRoutes from './routes/logRoutes';

var https = require('https');

var fs = require('fs');
var https_options = {

    key: fs.readFileSync("/etc/pki/tls/certs/2020/udistrital.key"),
  
    cert: fs.readFileSync("/etc/pki/tls/certs/2020/STAR_udistrital_edu_co.crt"),
  
    ca: [
  
            fs.readFileSync('/etc/pki/tls/certs/2020/SectigoRSADomainValidationSecureServerCA.crt'),
  
            fs.readFileSync('/etc/pki/tls/certs/2020/USERTrustRSAAAACA.crt')
  
         ]
  };

class Server {

    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors({origin: ['http://localhost:4200', 'http://localhost:3000/api/sistema-informacion',
        'http://10.20.200.183:3000/api', 'http://10.20.200.183:3000/api/login/', 'http://10.20.200.183', 'https://ieie.udistrital.edu.co/sistema-informacion'],
        credentials: true
        }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{

        this.app.use(indexRoutes);
        this.app.use('/api/participantes', participantesRoutes);
        this.app.use('/api/cursos', cursosRoutes);
        this.app.use('/api/certificados', certificadosRoutes);
        this.app.use('/api/login',loginRoute);
        this.app.use('/api/log',logRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
                console.log('Server on port', this.app.get('port'));
        });
    }

}
const server = new Server();
const httpsServer = https.createServer(https_options, server);
httpsServer.listen(3000, 'https://ieie.udistrital.edu.co/api/');
console.log('jksjda');

function loginRoutes(arg0: string, loginRoutes: any) {
    throw new Error('Function not implemented.');
}
