import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegistAdress from './pages/Registaddress'
import Userpage from './pages/Userpage'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/Userpage" element = {<Userpage />} />
                <Route path = "/Regist" element={<RegistAdress />} />
            </Routes>
        </BrowserRouter>
    )
}