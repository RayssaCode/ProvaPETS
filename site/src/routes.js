
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import InserirPet from './pages/inserirPets';
import ConsultarPets from './pages/consultarPets';


export default function Index(){
return(<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/pet/inserir'} element={<InserirPet/>} />
        <Route path={'/pet/consultar'} element={<ConsultarPets/>} />
    </Routes>
</BrowserRouter>)}