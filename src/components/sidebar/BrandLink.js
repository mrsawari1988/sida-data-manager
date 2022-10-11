import React from 'react';

export default function BrandLink() {
    return (
        <a href='../../index3.html' className='brand-link'>
            <img
                src='../../dist/img/AdminLTELogo.png'
                alt='AdminLTE Logo'
                className='brand-image img-circle elevation-3'
            />
            <span className='brand-text font-weight-light'>پنل مدیریت</span>
        </a>
    );
}
