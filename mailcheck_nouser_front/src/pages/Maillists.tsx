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
        axios.get(url+'/Mails/'+params.date).then((res)=>{
            setMails(res.data)
        })
    },[params.date])
    // const Mails={
    //     Mails:[
    //         {
    //             id:1,
    //             from:"kati",
    //             subject:"test",
    //             body:"test"
    //         },
    //         {
    //             id:2,
    //             from:"haro",
    //             subject:"test2",
    //             body:"poyo"
    //         }
    //     ]
    // }
    return(
        <div>
            {/* <MailTable data={Mails}/> */}
            <MailAccordion data={Mails}/>
            <Link to ={'/Userpage'}>Return UserPage</Link>
        </div>
    )
}
