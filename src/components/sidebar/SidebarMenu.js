import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
    {
        id: 1,
        title: 'داشبوردها',
        icon: 'fa-dashboard',
        link: '#',
        submenu: [
            {
                id: 2,
                title: 'داشبورد اول',
                icon: 'fa-circle-o',
                link: '#',
            },
            {
                id: 3,
                title: 'داشبورد دوم',
                icon: 'fa-circle-o',
                link: '#',
            },
            {
                id: 4,
                title: 'داشبورد سوم',
                icon: 'fa-circle-o',
                link: '#',
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
            class='nav nav-pills nav-sidebar flex-column'
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
