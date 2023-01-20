import axios from 'axios'
import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MailAccordion from '../components/MailAccordion'
import MailTable from '../components/MailTable'
import { Mails } from '../types/Mails'
export default function Maillists(){
    const [Mails,setMails] = useState<Mails>({Mails:[]})
    const params=useParams();
    const url = "http://localhost:3000";
    useEffect(()=>{
        axios.get(url+'/Mails/'+params.date).then((res)=>{
            setMails(res.data)
        })
    },[params.date])

    return(
        <div>
            {/* <MailTable data={Mails}/> */}
            <MailAccordion data={Mails}/>
        </div>
    )
}
