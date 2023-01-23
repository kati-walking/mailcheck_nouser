import { useEffect, useState } from 'react'

import Calendar from '../components/Calendar';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Events } from '../types/Events';

export default function Userpage(){
    //const events_list=[{title:'hoge',start:"2023-01-18"},{title:'huga',start:"2023-01-19"}]

    const url = "http://localhost:3000";
    const [events,setEvents] = useState<Events>({events:[]});
    useEffect(()=>{
        //console.log("get/events")
        axios.get(url+"/Events").then((res)=>{
            //console.log(res.data)
            setEvents(res.data);
        })
        console.log(events)
    },[])

    return(
        <div>
            <Button variant='contained' component = {Link} to={'/Registadress'}>
                RegistAdress
            </Button>
            <Calendar events={events} />
        </div>
    )
}