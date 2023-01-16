import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
export default function Calendar(props:any){
    return(
        <div>
            <FullCalendar 
                plugins={[dayGridPlugin,timeGridPlugin]}
                initialView="dayGridMonth"
                locales={[jaLocale]}
                locale='ja'
                headerToolbar={{
                    left:'prev,next today',
                    center:'title',
                    right:'dayGridMonth,timeGridWeek',
                }}
                events={props.events}
            />
        </div>
    )
}