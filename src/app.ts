import cors                         from 'cors'
import { applyRoutes }              from './Routes/index'
import express, { Application }     from 'express'
import { CORS_ORIGIN, PUBLIC_PATH } from './config'
import helmet                       from 'helmet'


export const app: Application = express()

app.use(cors({
    origin: 'https://11.0.0.19:3030',

    methods: [ 'GET', 'POST', 'PATCH' ],
    credentials: true
}))
app.use(helmet({crossOriginResourcePolicy: {policy: "cross-origin"}}));
app.use(express.json());
app.use(express.static(PUBLIC_PATH))
app.use(express.urlencoded({ extended: true }))


app.use(applyRoutes())
