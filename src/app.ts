import cors                         from 'cors'
import { applyRoutes }              from './Routes/index'
import express, { Application }     from 'express'
import { CORS_ORIGIN, PUBLIC_PATH } from './config'
import helmet                       from 'helmet'


export const app: Application = express()


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
// app.use(helmet({crossOriginResourcePolicy: {policy: "cross-origin"}}));
app.use(express.json());
app.use(express.static(PUBLIC_PATH))
app.use(express.urlencoded({ extended: true }))


app.use(applyRoutes())
