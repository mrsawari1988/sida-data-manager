import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import CreateDatabase from './pages/CreateDatabase';
export default function MainContent() {
    return (
        <div className='content-wrapper'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='create-database' element={<CreateDatabase />} />
            </Routes>
        </div>
    );
}
