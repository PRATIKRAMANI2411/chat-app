import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import process from 'process'

function App() {
    console.log(process.env.REACT_APP_LOCALHOST_KEY);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Chat />} />
                <Route path='/register' element={<Register />} />
                <Route path='/setAvatar' element={<SetAvatar />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
