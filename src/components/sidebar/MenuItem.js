import React from 'react';
import MenuItemLink from './MenuItemLink';

export default function MenuItem({ title, link, icon, submenu }) {
    if (submenu) {
        return (
            <li className='nav-item has-treeview'>
                <MenuItemLink link={link} icon={icon} title={title} showArrow={true} />

                <ul className='nav nav-treeview'>
                    {submenu.map((SubmenuItem) => (
                        <li className='nav-item' key={SubmenuItem.id}>
                            <MenuItemLink
                                link={SubmenuItem.link}
                                icon={SubmenuItem.icon}
                                title={SubmenuItem.title}
                                showArrow={false}
                            />
                        </li>
                    ))}
                </ul>
            </li>
        );
    } else {
        return (
            <li className='nav-item has-treeview'>
                <MenuItemLink link={link} icon={icon} title={title} showArrow={false} />
            </li>
        );
    }
}
