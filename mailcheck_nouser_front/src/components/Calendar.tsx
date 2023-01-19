import React, { useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin,{DateClickArg} from '@fullcalendar/interaction'
import {useNavigate} from 'react-router-dom';

export default function Calendar(props:any){
    const navigate = useNavigate();
    const handleDateClick = useCallback((arg:DateClickArg)=>{
        navigate('/Maillists/'+arg.date);
    },[])
    return(
        <div>
            <FullCalendar 
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                initialView="dayGridMonth"
                locales={[jaLocale]}
                locale='ja'
                headerToolbar={{
                    left:'prev,next today',
                    center:'title',
                    right:'dayGridMonth,timeGridWeek',
                }}
                events={props.events}
                dateClick={handleDateClick}
            />
        </div>
    )
}