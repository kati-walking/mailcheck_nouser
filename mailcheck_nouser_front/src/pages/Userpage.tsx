import React, { useEffect, useState } from 'react'

import Calendar from '../components/Calendar';
import { Mailnumbers } from '../types/Mailnumbers';

import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';
import { Link } from 'react-router-dom';

export default function Userpage(){
    //const events_list=[{title:'hoge',start:"2023-01-18"},{title:'huga',start:"2023-01-19"}]

    const url = "http://localhost:3000";
    const [Mailnumbers,setMailnumbers] = useState<Mailnumbers>({Mailnumbers:[]});
    useEffect(()=>{
        axios.get(url+"Mailnumbers").then((res)=>{
            setMailnumbers(res.data);
        })
    })

    return(
        <div>
            <Link to={'/Registadress'}>RegistAdress</Link>
            <Calendar events={Mailnumbers.Mailnumbers} />
        </div>
    )
}