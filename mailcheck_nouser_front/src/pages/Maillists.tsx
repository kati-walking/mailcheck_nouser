import axios from 'axios'
import React, { useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MailAccordion from '../components/MailAccordion'
import MailTable from '../components/MailTable'
import { Mails } from '../types/Mails'
export default function Maillists(){
    const [Mails,setMails] = useState<Mails>({Mails:[]})
    const params=useParams();
    const url = "http://localhost:3000";

    useEffect(()=>{
        console.log(params)
        axios.get(url+'/Mails/'+params.date).then((res)=>{
            setMails({Mails:res.data})
            //console.log("mails:")
            //console.log(Mails)
        })

    },[]);
    return(
        <div>
            {/* <MailTable data={Mails}/> */}
            <MailAccordion data={Mails}/>
            <Link to ={'/Userpage'}>Return UserPage</Link>
        </div>
    )
}
