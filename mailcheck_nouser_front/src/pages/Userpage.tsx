import React, { useEffect, useState } from 'react'

import Calendar from '../components/Calendar';
import { Maildetails} from '../types/Maildetails';

import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';
import { Link } from 'react-router-dom';

export default function Userpage(){
    //const events_list=[{title:'hoge',start:"2023-01-18"},{title:'huga',start:"2023-01-19"}]

    const url = "http://localhost:3000";
    const [Maildetails,setMaildetails] = useState<Maildetails>({Maildetails:[]});
    useEffect(()=>{
        axios.get(url+"MaildetailsperDay").then((res)=>{
            setMaildetails(res.data);
        })
    })

    return(
        <div>
            <Link to={'/Registadress'}>RegistAdress</Link>
            <Calendar events={Maildetails.Maildetails} />
        </div>
    )
}