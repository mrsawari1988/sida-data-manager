import React from 'react';
import ContentCard from './ContentCard';
import ContentHeader from './ContentHeader';

export default function Content({ cardTitle, mainTitle, children }) {
    return (
        <>
            <ContentHeader title={mainTitle} />
            <ContentCard title={cardTitle}>{children}</ContentCard>
        </>
    );
}
