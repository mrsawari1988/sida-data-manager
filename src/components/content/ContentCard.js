import React from 'react';

export default function ContentCard({ children, title }) {
    return (
        <section className='content'>
            <div className='card'>
                <div className='card-header'>
                    <h3 className='card-title'>{title}</h3>
                </div>
                <div className='card-body'>{children}</div>
                <div className='card-footer'>فوتر</div>
            </div>
        </section>
    );
}
