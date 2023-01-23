import { useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin,{DateClickArg} from '@fullcalendar/interaction'
import {useNavigate} from 'react-router-dom';
import { Events } from '../types/Events';

export default function Calendar(props:{events:Events}){
    const getStringFromDate=(date:Date):string=>{
        const year_str = date.getFullYear();
        //月だけ+1すること
        const month_str = 1 + date.getMonth();
        const day_str = date.getDate();
        
        let format_str = 'YYYY-MM-DD hh:mm:ss';
        format_str = format_str.replace(/YYYY/g, year_str.toString());
        format_str = format_str.replace(/MM/g, month_str.toString());
        format_str = format_str.replace(/DD/g, day_str.toString());
        format_str = format_str.replace(/hh/g, "00");
        format_str = format_str.replace(/mm/g, "00");
        format_str = format_str.replace(/ss/g, "00");
        return format_str;
    };
    const navigate = useNavigate();
    const handleDateClick = useCallback((arg:DateClickArg)=>{
        const formatdate = getStringFromDate(arg.date)
        navigate('/Maillists/'+formatdate);
    },[])
    console.log(props.events)
    return(
        <div>
            <FullCalendar 
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                initialView="dayGridMonth"
                locales={[jaLocale]}
                locale='ja'
                contentHeight={'auto'}
                // dayMaxEventRows={5}
                headerToolbar={{
                    left:'prev,next today',
                    center:'title',
                    right:'dayGridMonth,timeGridWeek',
                }}
                views={{
                    timeGridWeek: {
                    slotMinTime: '00:00:00',
                    slotMaxTime: '00:00:00'
                  }
                }}
                events={props.events}
                dateClick={handleDateClick}
            />
        </div>
    )
}