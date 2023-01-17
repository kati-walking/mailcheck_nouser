import React from 'react'

import Calendar from '../components/Calendar';
import { Mailnumbers } from '../types/Mailnumbers';

import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';

export default function Userpage(){
    //const events_list=[{title:'hoge',start:"2023-01-18"},{title:'huga',start:"2023-01-19"}]
    try {
        const options:AxiosRequestConfig ={
            url:"http://localhost:3000/Mailnumbers",
            method:"GET",
        };
        axios(options)
            .then((res: AxiosResponse<{
                email:string,
                Token:string
            }>) =>{
                const {data,status}=res;
            })
        //console.log("poyopoyo");
    } catch (error) {
        alert("adress or password are wrong")
        console.log(error)
    }
    const Mailnumbers = JSON.parse(res.data) as Mailnumbers;
    return(
        <div>
            <Calendar events={Mailnumbers.Mailnumbers} />
        </div>
    )
}