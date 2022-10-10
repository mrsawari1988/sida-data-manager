import React from 'react';
import MenuItemLink from './MenuItemLink';

export default function MenuItem({ title, link, icon, submenu }) {
    if (submenu) {
        return (
            <li className='nav-item has-treeview'>
                <MenuItemLink link={link} icon={icon} title={title} />
                <ul className='nav nav-treeview'>
                    {submenu.map((item) => {
                        return (
                            <li className='nav-item' key={item.id}>
                                <MenuItemLink
                                    link={item.link}
                                    icon={item.icon}
                                    title={item.title}
                                />
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    } else {
        return (
            <li className='nav-item has-treeview'>
                <MenuItemLink link={link} icon={icon} title={title} />
            </li>
        );
    }
}
