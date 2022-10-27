import React from 'react';
import DatabaseNotifierItem from './DatabaseNotifierItem';

export default function DatabaseNotifire({ notifires, notifiresIndex }) {
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
