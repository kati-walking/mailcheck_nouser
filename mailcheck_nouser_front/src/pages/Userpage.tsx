import React from 'react'

import Calendar from '../components/Calendar';
import { Mailnumbers } from '../types/Mailnumbers';

import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';

export default function Userpage(){
    //const events_list=[{title:'hoge',start:"2023-01-18"},{title:'huga',start:"2023-01-19"}]
    const options:AxiosRequestConfig ={
        url:"http://localhost:3000/Mailnumbers",
        method:"GET",
    };
    const [Mailnumbers,setMailnumbers] = useState<Mailnumbers>
    useEffect(()=>{
        axios(options)
            .then((res: AxiosResponse<Mailnumbers>) =>{
                const {data,status}=res;
                setMailnumbers(data);
            })
            .catch((e:AxiosError<{error:String}>)=>{
                console.log(e);
            })
    })

    return(
        <div>
            <Calendar events={Mailnumbers.Mailnumbers} />
        </div>
    )
}