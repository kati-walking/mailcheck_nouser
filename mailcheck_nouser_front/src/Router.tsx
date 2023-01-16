import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Userpage from './pages/Userpage'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Userpage />} />
            </Routes>
        </BrowserRouter>
    )
}