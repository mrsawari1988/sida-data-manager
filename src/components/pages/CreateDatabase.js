import React from 'react';
import Content from '../content/Content';

export default function CreateDatabase() {
    return (
        <Content cardTitle='ایجاد پایگاه داده' mainTitle='پایگاه داده'>
            <div className='callout callout-warning'>
                <h5>پایگاه داده ای یافت نشد</h5>
                <p>برای ایجاد پایگاه داده عملیات ایجاد پایگاه را آغاز کنید</p>
            </div>

            <button className='btn btn-lg btn-block btn-info'>ایجاد پایگاه داده</button>
            <div className='mt-3'>
                <ul class='todo-list ui-sortable'>
                    <li className='d-flex justify-content-between align-items-center'>
                        <span class='handle ui-sortable-handle'>
                            <i class='fa fa-ellipsis-v'></i>
                            <i class='fa fa-ellipsis-v'></i>
                        </span>

                        <span class='text'> اطلاعات دانش آموزان</span>
                        <small class='badge badge-warning'>
                            <i class='fa fa-clock-o'></i> درحال دریافت
                        </small>
                    </li>
                    <li className='d-flex justify-content-between align-items-center'>
                        <span class='handle ui-sortable-handle'>
                            <i class='fa fa-ellipsis-v'></i>
                            <i class='fa fa-ellipsis-v'></i>
                        </span>

                        <span class='text'> مشخصات کلا س ها </span>
                        <small class='badge badge-warning'>
                            <i class='fa fa-clock-o'></i> درحال دریافت
                        </small>
                    </li>
                    <li className='d-flex justify-content-between align-items-center'>
                        <span class='handle ui-sortable-handle'>
                            <i class='fa fa-ellipsis-v'></i>
                            <i class='fa fa-ellipsis-v'></i>
                        </span>

                        <span class='text'>مشخصات دبیران</span>
                        <small class='badge badge-warning'>
                            <i class='fa fa-clock-o'></i> درحال دریافت
                        </small>
                    </li>
                    <li className='d-flex justify-content-between align-items-center'>
                        <span class='handle ui-sortable-handle'>
                            <i class='fa fa-ellipsis-v'></i>
                            <i class='fa fa-ellipsis-v'></i>
                        </span>

                        <span class='text'> اطلاعات دروس</span>
                        <small class='badge badge-warning'>
                            <i class='fa fa-clock-o'></i> درحال دریافت
                        </small>
                    </li>
                </ul>
            </div>
        </Content>
    );
}
