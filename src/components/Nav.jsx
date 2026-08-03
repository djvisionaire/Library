import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import LibraryLogo from '../assets/Library.svg';
import { Link } from "react-router-dom";

const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} alt="Library" className="logo" />
                </Link>
                <ul className="nav__Links">
                    <li className="nav__list">
                        <Link to="/" className="nav__Link">Home</Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/Books" className="nav__Link">Books</Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__Link" >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__Links">
                        <li className="menu_lisk">
                            <Link to="/" className="menu__Link">
                            Home</Link>
                        </li>
                        <li className="menu_lisk">
                            <Link to="/books" className="menu__Link">
                            Books</Link>
                        </li>
                        <li className="menu_lisk">
                            <Link to="/cart" className="menu__Link">
                            Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;