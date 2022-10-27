import React, { useState, useReducer, useEffect } from 'react';
import Content from '../content/Content';
import DatabaseNotifire from './createdatabase/DatabaseNotifire';
import { notifireInitialState, notifireReducer } from './createdatabase/notifireReducer';

export default function CreateDatabase() {
    const [notifires, dispach] = useReducer(notifireReducer, notifireInitialState);
    const [token, setToken] = useState('');
    const [showNotifires, setShowNotifires] = useState(false);
    const [tokenAvailabe, setTokenAvailable] = useState(true);
    const [notifiresIndex, setNotifiresIndex] = useState([
        'students',
        'classes',
        'teachers',
        'courses',
    ]);

    const getDataHandler = async () => {
        setShowNotifires(true);
        const res = await window.electronAPI.getStudents(token);
        console.log(res);
    };
    const getTokenHandler = () => {
        window.electronAPI.openSida();
    };

    window.electronAPI.getToken(async (event, data) => {
        console.log('getting data');
        setToken(data);
        console.log(token);
        setTokenAvailable(false);
        window.electronAPI.closeSida();
    });

    //DB update notifier
    window.electronAPI.dbUpdateNotifier(async (event, data) => {
        dispach({ type: data.datafield });
    });

    return (
        <Content cardTitle='ایجاد پایگاه داده' mainTitle='پایگاه داده'>
            <div className='callout callout-warning'>
                <h5>پایگاه داده ای یافت نشد</h5>
                <p>برای ایجاد پایگاه داده عملیات ایجاد پایگاه را آغاز کنید</p>
            </div>

            <button className='btn btn-lg btn-block btn-warning' onClick={getTokenHandler}>
                دریافت توکن
            </button>
            <button
                disabled={tokenAvailabe}
                className='btn btn-lg btn-block btn-info'
                onClick={getDataHandler}
            >
                ایجاد پایگاه داده
            </button>
            {showNotifires && (
                <DatabaseNotifire notifires={notifires} notifiresIndex={notifiresIndex} />
            )}
        </Content>
    );
}
