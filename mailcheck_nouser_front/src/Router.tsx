import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Maillists from './pages/Maillists'
import NotFound from './pages/NotFound'
import RegistAdress from './pages/Registaddress'
import Userpage from './pages/Userpage'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element ={<Userpage />} />
                <Route path = "/Userpage" element = {<Userpage />} />
                <Route path = "/Registadress" element={<RegistAdress />} />
                <Route path = "/Maillists/:date" element = {<Maillists />} />
                <Route path = "*" element = {<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}