import React from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import Convertcurancy from '../Components/Convertcurancy';
import logo from '../Logo/logo.png';

const MainLayout = ({ children }) => {
    const count = useSelector(state => state.counter);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#3C5B6F' }}>
                    <div className="container-fluid">
                        <button
                            data-mdb-collapse-init
                            className="navbar-toggler"
                            type="button"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li>
                                    <img src={logo}
                                    height="60" 
                                    alt="Logo" 
                                    loading="lazy" />

                                </li>
                                <li className="nav-item" >
                                    <Link className="nav-link" style={{ color: '#FAF6E3' }} to="/">الرئيسية</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#FAF6E3' }} to="/aboutus">حولنا</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#FAF6E3' }} to="/contact">اتصل بنا</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#FAF6E3' }} to="/convert">تحويل عملات</Link>
                                </li>
                                

                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <a className="link-secondary me-3" href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>



                            <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px' }}>
                                {/* عربة التسوق */}
                                <div className="dropdown">
                                    <Link
                                        to="/cart"
                                        role="button"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://img.icons8.com/?size=100&id=15893&format=png&color=b59f78"
                                            className="rounded-circle"
                                            height="30"
                                            alt="Shopping Cart Icon"
                                            loading="lazy"
                                        />

                                    </Link>
                                </div>

                                {/* الملف الشخصي */}
                                <div className="dropdown">
                                    <Link
                                        to="/profile"
                                        role="button"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=b59f78"
                                            className="rounded-circle"
                                            height="30"
                                            alt="Profile Icon"
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>

        </>
    );
}

export default MainLayout;
