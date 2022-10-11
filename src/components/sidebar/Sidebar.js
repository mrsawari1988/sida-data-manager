import React from 'react';
import SidebarMenu from './SidebarMenu';

import BrandLink from './BrandLink';
export default function Sidebar() {
    return (
        <aside className='main-sidebar sidebar-dark-primary elevation-4'>
            <BrandLink />

            <div className='sidebar'>
                <div>
                    <nav className='mt-2'>
                        <SidebarMenu />
                    </nav>
                </div>
            </div>
        </aside>
    );
}
