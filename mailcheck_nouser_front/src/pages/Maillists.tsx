import { Button } from '@mui/material'
import axios from 'axios'
import { useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import MailAccordion from '../components/MailAccordion'
import { Mails } from '../types/Mails'
export default function Maillists(){
    const [Mails,setMails] = useState<Mails>({mails:[]})
    const params=useParams();
    const url = "http://localhost:3000";

    useEffect(()=>{
        console.log(params)
        axios.get(url+'/Mails/'+params.date).then((res)=>{
            setMails({mails:res.data})
            //console.log("mails:")
            //console.log(Mails)
        })

    },[]);
    return(
        <div>
            {/* <MailTable data={Mails}/> */}
            <MailAccordion data={Mails}/>
            {/* <Link to ={'/Userpage'}>Return UserPage</Link> */}
            <Button variant='contained' component = {Link} to={'/Userpage'}>
                Return UserPage
            </Button>
        </div>
    )
}
