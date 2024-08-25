import React, { useState } from 'react';
import './styles.css'; // Make sure to import your CSS file

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i className="ri-planet-line"></i> Company
          </a>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className={`ri-menu-line nav__burger ${showMenu ? 'show-icon' : ''}`}></i>
            <i className={`ri-close-line nav__close ${showMenu ? 'show-icon' : ''}`}></i>
          </div>
        </div>
        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li><a href="#" className="nav__link"><i className="ri-home-line"></i> Home</a></li>
            <li><a href="#" className="nav__link"><i className="ri-building-line"></i> Company</a></li>

            <li className="dropdown__item">
              <div className="nav__link">
                <i className="ri-bar-chart-box-line"></i> Analytics <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-pie-chart-line"></i> Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </a>
                </li>
                <li className="dropdown__subitem">
                  <div className="dropdown__link">
                    <i className="ri-bar-chart-line"></i> Reports <i className="ri-add-line dropdown__add"></i>
                  </div>
                  <ul className="dropdown__submenu">
                    <li><a href="#" className="dropdown__sublink"><i className="ri-file-list-line"></i> Documents</a></li>
                    <li><a href="#" className="dropdown__sublink"><i className="ri-cash-line"></i> Payments</a></li>
                    <li><a href="#" className="dropdown__sublink"><i className="ri-refund-2-line"></i> Refunds</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a href="#" className="nav__link"><i className="ri-shopping-cart-line"></i> Products</a></li>
            <li className="dropdown__item">
              <div className="nav__link">
                <i className="ri-user-line"></i> Users <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul className="dropdown__menu">
                <li><a href="#" className="dropdown__link"><i className="ri-user-line"></i> Profiles</a></li>
                <li><a href="#" className="dropdown__link"><i className="ri-lock-line"></i> Accounts</a></li>
                <li><a href="#" className="dropdown__link"><i className="ri-message-3-line"></i> Messages</a></li>
              </ul>
            </li>
            <li><a href="#" className="nav__link"><i className="ri-contacts-line"></i> Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
