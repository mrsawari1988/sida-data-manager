import React from 'react';

export default function DatabaseNotifierItem({ title, status, badgeColour, badgeIcon }) {
    return (
        <li className='d-flex justify-content-between align-items-center'>
            <span className='handle ui-sortable-handle'>
                <i className='fa fa-ellipsis-v'></i>
                <i className='fa fa-ellipsis-v'></i>
            </span>

            <span className='text'>{title}</span>
            <small className={`badge badge-${badgeColour}`}>
                <i className={`fa ${badgeIcon}`}></i>
                {status}
            </small>
        </li>
    );
}
