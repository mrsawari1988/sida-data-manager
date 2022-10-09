import React from 'react';

export default function Sidebar() {
    return (
        <aside className='main-sidebar sidebar-dark-primary elevation-4'>
            <a href='../../index3.html' className='brand-link'>
                <img
                    src='../../dist/img/AdminLTELogo.png'
                    alt='AdminLTE Logo'
                    className='brand-image img-circle elevation-3'
                />
                <span className='brand-text font-weight-light'>پنل مدیریت</span>
            </a>

            <div className='sidebar'>
                <div>
                    <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
                        <div className='image'>
                            <img
                                src='https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g'
                                className='img-circle elevation-2'
                                alt='User Image'
                            />
                        </div>
                        <div className='info'>
                            <a href='#' className='d-block'>
                                حسام موسوی
                            </a>
                        </div>
                    </div>

                    <nav className='mt-2'>
                        <ul
                            className='nav nav-pills nav-sidebar flex-column'
                            data-widget='treeview'
                            role='menu'
                            data-accordion='false'
                        >
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-dashboard'></i>
                                    <p>
                                        داشبوردها
                                        <i className='right fa fa-angle-left'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../../index.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>داشبورد اول</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../../index2.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>داشبورد دوم</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../../index3.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>داشبورد سوم</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <a href='../widgets.html' className='nav-link'>
                                    <i className='nav-icon fa fa-th'></i>
                                    <p>
                                        ویجت‌ها
                                        <span className='right badge badge-danger'>جدید</span>
                                    </p>
                                </a>
                            </li>
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-pie-chart'></i>
                                    <p>
                                        چارت‌ها
                                        <i className='right fa fa-angle-left'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../charts/chartjs.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>نمودار ChartJS</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../charts/flot.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>نمودار Flot</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../charts/inline.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>نمودار Inline</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-tree'></i>
                                    <p>
                                        اشیای گرافیکی
                                        <i className='fa fa-angle-left right'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../UI/general.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>عمومی</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../UI/icons.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>آیکون‌ها</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../UI/buttons.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>دکمه‌ها</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../UI/sliders.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>اسلایدر‌ها</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-edit'></i>
                                    <p>
                                        فرم‌ها
                                        <i className='fa fa-angle-left right'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../forms/general.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>اجزا عمومی</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../forms/advanced.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>پیشرفته</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../forms/editors.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>ویشرایشگر</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-table'></i>
                                    <p>
                                        جداول
                                        <i className='fa fa-angle-left right'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../tables/simple.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>جداول ساده</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../tables/data.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>جداول داده</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-header'>مثال‌ها</li>
                            <li className='nav-item'>
                                <a href='../calendar.html' className='nav-link'>
                                    <i className='nav-icon fa fa-calendar'></i>
                                    <p>
                                        تقویم
                                        <span className='badge badge-info right'>2</span>
                                    </p>
                                </a>
                            </li>
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-envelope-o'></i>
                                    <p>
                                        ایمیل‌ باکس
                                        <i className='fa fa-angle-left right'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../mailbox/mailbox.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>اینباکس</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../mailbox/compose.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>ایجاد</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../mailbox/read-mail.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>خواندن</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item has-treeview'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-book'></i>
                                    <p>
                                        صفحات
                                        <i className='fa fa-angle-left right'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../examples/invoice.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>سفارشات</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../examples/profile.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>پروفایل</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../examples/login.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>صفحه ورود</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../examples/register.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>صفحه عضویت</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../examples/lockscreen.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>قفل صفحه</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item has-treeview menu-open'>
                                <a href='#' className='nav-link active'>
                                    <i className='nav-icon fa fa-plus-square-o'></i>
                                    <p>
                                        بیشتر
                                        <i className='fa fa-angle-left right'></i>
                                    </p>
                                </a>
                                <ul className='nav nav-treeview'>
                                    <li className='nav-item'>
                                        <a href='../examples/404.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>ارور 404</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../examples/500.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>ارور 500</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a
                                            href='../examples/blank.html'
                                            className='nav-link active'
                                        >
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>صفحه خالی</p>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='../../starter.html' className='nav-link'>
                                            <i className='fa fa-circle-o nav-icon'></i>
                                            <p>صفحه شروع</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-header'>متفاوت</li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-file'></i>
                                    <p>مستندات</p>
                                </a>
                            </li>
                            <li className='nav-header'>برچسب‌ها</li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-circle-o text-danger'></i>
                                    <p className='text'>مهم</p>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-circle-o text-warning'></i>
                                    <p>هشدار</p>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>
                                    <i className='nav-icon fa fa-circle-o text-info'></i>
                                    <p>اطلاعات</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}
