import React from 'react'

import Calendar from '../components/Calendar';
export default function Userpage(){
    const events_list=[{title:'hoge',start:"2023-01-18"},{title:'huga',start:"2023-01-19"}]
    return(
        <div>
            <Calendar events={events_list} />
        </div>
    )
}