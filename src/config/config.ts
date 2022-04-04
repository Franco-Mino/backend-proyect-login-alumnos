import {config} from "dotenv";
config()
// este repo solo muestra de manera local el funcionamiento del back.
const date = "mongodb://127.0.0.1/my_database/login-mongo-typescript"
                    //si no anda, sacar 127.0.0.1 por localhost
export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecretttoken',
    DB: {
        URI: date, 
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    }
}