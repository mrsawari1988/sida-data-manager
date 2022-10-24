import React, { useState } from 'react';
import DatabaseNotifierItem from './DatabaseNotifierItem';
const initialState = {
    students: {
        title: 'اطلاعات دانش آموزان',
        status: 'درحال دریافت',
        badgeColour: 'warning',
        badgeIcon: 'fa-clock-o',
    },
    classes: {
        title: 'مشخصات کلاس ها',
        status: 'درحال دریافت',
        badgeColour: 'warning',
        badgeIcon: 'fa-clock-o',
    },
    teachers: {
        title: 'مشخصات دبیران',
        status: 'درحال دریافت',
        badgeColour: 'warning',
        badgeIcon: 'fa-clock-o',
    },
    courses: {
        title: 'اطلاعات دروس',
        status: 'درحال دریافت',
        badgeColour: 'warning',
        badgeIcon: 'fa-clock-o',
    },
};
export default function DatabaseNotifire() {
    const [notifires, setNotifiers] = useState(initialState);
    const [notifiresIndex, setNotifiresIndex] = useState([
        'students',
        'classes',
        'teachers',
        'courses',
    ]);
    return (
        <div className='mt-3'>
            <ul className='todo-list ui-sortable'>
                {notifiresIndex.map((item) => {
                    return (
                        <DatabaseNotifierItem
                            title={notifires[item].title}
                            status={notifires[item].status}
                            badgeColour={notifires[item].badgeColour}
                            badgeIcon={notifires[item].badgeIcon}
                            key={item}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
