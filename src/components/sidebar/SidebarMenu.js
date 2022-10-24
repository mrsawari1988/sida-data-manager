import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
    {
        id: 1,
        title: 'پایگاه داده',
        icon: 'fa-database',
        link: '#',
        submenu: [
            {
                id: 2,
                title: 'ایجاد پایگاه داده',
                icon: 'fa-circle-o',
                link: '/create-database',
            },
        ],
    },
    {
        id: 5,
        title: 'چارت ها',
        icon: 'fa-pie-chart',
        link: '#',
    },
];
export default function SidebarMenu() {
    return (
        <ul
            className='nav nav-pills nav-sidebar flex-column'
            data-widget='treeview'
            role='menu'
            data-accordion='false'
        >
            {menuItems.map((item) => {
                return (
                    <MenuItem
                        link={item.link}
                        icon={item.icon}
                        title={item.title}
                        submenu={item.submenu}
                        key={item.id}
                    />
                );
            })}
        </ul>
    );
}
