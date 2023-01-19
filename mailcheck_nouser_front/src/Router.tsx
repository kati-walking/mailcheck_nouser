import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Maillists from './pages/Maillists'
import RegistAdress from './pages/Registaddress'
import Userpage from './pages/Userpage'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/Userpage" element = {<Userpage />} />
                <Route path = "/Registadress" element={<RegistAdress />} />
                <Route path = "/Maillists/:date" element = {<Maillists />} />
            </Routes>
        </BrowserRouter>
    )
}