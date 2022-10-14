import React from 'react';

export default function ContentHeader({ title }) {
    return (
        <section className='content-header'>
            <div className='container-fluid'>
                <div className='row mb-2'>
                    <div className='col-sm-6'>
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
