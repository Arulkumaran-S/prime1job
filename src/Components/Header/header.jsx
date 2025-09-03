import React, { useState, useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setMobileSubMenuOpen(false);
  };

  const toggleMobileSubMenu = (e) => {
    e.preventDefault();
    setMobileSubMenuOpen(prev => !prev);
  };

  const toggleDesktopDropdown = () => {
    setDesktopDropdownOpen(prev => !prev);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(false);
    setDesktopDropdownOpen(false);
  };

  // Close mobile menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky-top bg-white shadow-sm header-container">
      <nav className="container header-nav">

        {/* Logo */}
        <div className="nav-left">
          <a href="/" className="navbar-brand fw-bold">Prime1Jobs</a>
        </div>

        {/* Desktop Links */}
        <ul className="header-nav-links d-none d-lg-flex align-items-center nav-center">
          <li><a href="/" className="nav-link" onClick={closeAllMenus}>Home</a></li>
          <li><a href="/about" className="nav-link" onClick={closeAllMenus}>About Us</a></li>
          <li
            className="header-dropdown"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <button
              className="nav-link dropdown-toggle btn btn-link"
              onClick={toggleDesktopDropdown}
              type="button"
            >
              For Candidate
            </button>
            <ul className={`header-dropdown-menu ${desktopDropdownOpen ? 'show' : ''}`}>
              <li>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    closeAllMenus();
                  }}
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    closeAllMenus();
                  }}
                >
                  Resources
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="d-none d-lg-flex gap-3 nav-right">
          <a href="/employer" className="btn btn-outline-primary px-3" onClick={closeAllMenus}>For Employer</a>
          <a href="/login" className="btn btn-primary px-4" onClick={closeAllMenus}>Login</a>
        </div>

        {/* Mobile Hamburger/X Button */}
        <button
          className="header-hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileMenuOpen ? (
            <span className="hamburger-close">×</span>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`header-mobile-menu ${mobileMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <ul className="mobile-nav-links">
            <li><a href="/" onClick={closeAllMenus}>Home</a></li>
            <li><a href="/about" onClick={closeAllMenus}>About Us</a></li>
            <li className="mobile-submenu">
              <button
                className={`submenu-toggle ${mobileSubMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileSubMenu}
                type="button"
              >
                For Candidate <span className="arrow">{mobileSubMenuOpen ? '▲' : '▼'}</span>
              </button>
              <ul className={`submenu-items ${mobileSubMenuOpen ? 'open' : ''}`}>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      closeAllMenus();
                    }}
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      closeAllMenus();
                    }}
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="mobile-buttons">
            <a href="/employer" className="btn btn-outline-primary w-100 mb-2" onClick={closeAllMenus}>For Employer</a>
            <a href="/login" className="btn btn-primary w-100" onClick={closeAllMenus}>Login</a>
          </div>
        </div>
      </nav>

      {/* Overlay to close mobile menu */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={closeAllMenus} />}
    </header>
  );
};

export default Header;
