import React from 'react';

export default function MainSidebar() {
    return (
        <aside className='main-sidebar sidebar-dark-primary elevation-4'>
            <a href='../../index3.html' className='brand-link'>
                <img
                    src='../../dist/img/AdminLTELogo.png'
                    alt='AdminLTE Logo'
                    className='brand-image img-circle elevation-3'
                />
                <span className='brand-text font-weight-light'>پنل مدیریت</span>
            </a>

            <div className='sidebar'>
                <div>
                    <nav className='mt-2'></nav>
                </div>
            </div>
        </aside>
    );
}
