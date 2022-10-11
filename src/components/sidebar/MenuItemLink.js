import React from 'react';

export default function MenuItemLink({ title, link, icon, showArrow }) {
    return (
        <a href={link} className='nav-link'>
            <i className={`nav-icon fa ${icon}`}></i>
            <p>
                {title}
                {showArrow && <i className={`right fa fa-angle-left`}></i>}
            </p>
        </a>
    );
}
