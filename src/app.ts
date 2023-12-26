import cors                         from 'cors'
import { applyRoutes }              from './Routes/index'
import express, { Application }     from 'express'
import { CORS_ORIGIN, PUBLIC_PATH } from './config'
import helmet                       from 'helmet'


export const app: Application = express()

app.use(cors());
app.use(helmet({crossOriginResourcePolicy: {policy: "cross-origin"}}));
app.use(express.json());
app.use(express.static(PUBLIC_PATH))
app.use(express.urlencoded({ extended: true }))


app.use(applyRoutes())
