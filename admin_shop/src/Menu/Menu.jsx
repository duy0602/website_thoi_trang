import React from 'react';

function Menu(props) {

    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar" data-sidebarbg="skin6">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href='/'>
                            <i data-feather="home" className="feather-icon"></i><span
                                className="hide-menu">DASHBOARD</span></a></li>
                        <li className="list-divider"></li>

                        <li className="nav-small-cap"><span className="hide-menu">THÀNH PHẦN</span></li>
                        <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href='/chat'>
                            <i data-feather="message-square" className="feather-icon"></i><span
                                className="hide-menu">KHÁCH HÀNG</span></a></li>

                        <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="#"
                            aria-expanded="false"><i data-feather="grid" className="feather-icon"></i><span
                                className="hide-menu">THÔNG TIN</span></a>
                            <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                <li className="sidebar-item"><a href="/users" className="sidebar-link"><span
                                    className="hide-menu">
                                    THÔNG TIN NGƯỜI DÙNG
                                        </span></a>
                                </li>
                                <li className="sidebar-item"><a href="/products" className="sidebar-link"><span className="hide-menu">
                                    THÔNG TIN SẢN PHẨM
                                        </span></a>
                                </li>
                                <li className="sidebar-item"><a href="/categories" className="sidebar-link"><span className="hide-menu">
                                    THÔNG TIN DANH MỤC
                                        </span></a>
                                </li>
                                <li className="sidebar-item"><a href="/history" className="sidebar-link"><span
                                    className="hide-menu">
                                    LỊCH SỬ
                                        </span></a>
                                </li>
                            </ul>
                        </li>

                        <li className="list-divider"></li>
                        <li className="nav-small-cap"><span className="hide-menu">XÁC THỰC</span></li>

                        <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="authentication-login1.html"
                            aria-expanded="false"><i data-feather="lock" className="feather-icon"></i><span
                                className="hide-menu">ĐĂNG NHẬP
                                </span></a>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link sidebar-link"
                            href="authentication-register1.html" aria-expanded="false"><i data-feather="lock"
                                className="feather-icon"></i><span className="hide-menu">ĐĂNG KÝ
                                </span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Menu;