import React from 'react';
import Students from './pages/Students';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
export default function MainContent() {
    return (
        <div className='content-wrapper'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='students' element={<Students />} />
            </Routes>
        </div>
    );
}
