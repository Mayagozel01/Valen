import axios from "axios";
import md5 from "md5";

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const date=today.toISOString().slice(0,10)
let date1=date.replaceAll('-','')
let password='Valantis_'+date1
console.log(password)

export const API_URL='http://api.valantis.store:40000/'
const $authApi =  axios.create(
    {
        baseURL:API_URL,

    }
)

const authInterceptor = (config)=>{
    config.headers['X-Auth'] = md5(password)
    return config
}

$authApi.interceptors.request.use(authInterceptor)
export {$authApi}