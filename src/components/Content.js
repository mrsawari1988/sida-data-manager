import React from 'react';

export default function Content() {
    return (
        <div className='content-wrapper'>
            <section className='content-header'>
                <div className='container-fluid'>
                    <div className='row mb-2'>
                        <div className='col-sm-6'>
                            <h1>صفحه خالی</h1>
                        </div>
                        <div className='col-sm-6'>
                            <ol className='breadcrumb float-sm-left'>
                                <li className='breadcrumb-item'>
                                    <a href='#'>خانه</a>
                                </li>
                                <li className='breadcrumb-item active'>صفحه خالی</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content'>
                <div className='card'>
                    <div className='card-header'>
                        <h3 className='card-title'>عنوان</h3>

                        <div className='card-tools'>
                            <button
                                type='button'
                                className='btn btn-tool'
                                data-widget='collapse'
                                data-toggle='tooltip'
                                title='Collapse'
                            >
                                <i className='fa fa-minus'></i>
                            </button>
                            <button
                                type='button'
                                className='btn btn-tool'
                                data-widget='remove'
                                data-toggle='tooltip'
                                title='Remove'
                            >
                                <i className='fa fa-times'></i>
                            </button>
                        </div>
                    </div>
                    <div className='card-body'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است.
                    </div>
                    <div className='card-footer'>فوتر</div>
                </div>
            </section>
        </div>
    );
}
