import React from 'react';
import { Link } from 'react-router-dom';
export default function MenuItemLink({ title, link, icon, showArrow }) {
    return (
        <Link to={link} className='nav-link'>
            <i className={`nav-icon fa ${icon}`}></i>
            <p>
                {title}
                {showArrow && <i className={`right fa fa-angle-left`}></i>}
            </p>
        </Link>
    );
}
