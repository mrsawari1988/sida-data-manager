import React from 'react';
import Content from '../content/Content';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <Content cardTitle='صفحه اول' mainTitle='صفحه اول'>
            <div>صفحه اصلی سایت</div>
            <Link to='/students'>go to students</Link>
        </Content>
    );
}
