import React from 'react';
import Content from '../content/Content';
import DatabaseNotifire from './createdatabase/DatabaseNotifire';

export default function CreateDatabase() {
    return (
        <Content cardTitle='ایجاد پایگاه داده' mainTitle='پایگاه داده'>
            <div className='callout callout-warning'>
                <h5>پایگاه داده ای یافت نشد</h5>
                <p>برای ایجاد پایگاه داده عملیات ایجاد پایگاه را آغاز کنید</p>
            </div>

            <button className='btn btn-lg btn-block btn-info'>ایجاد پایگاه داده</button>
            <DatabaseNotifire />
        </Content>
    );
}
