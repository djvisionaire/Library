import React from 'react';
import Logo from "../assets/Library.svg" 
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to='/'>
                    <figure className='footer__logo'>
                        <img src={Logo} className='footer__logo--img' alt='Libray Logo' />
                    </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to='/' className='footer__Link'>Home</Link>
                        <span className='footer__Link no-cursor'>About</span>
                        <Link to='/books'className='footer__Link'>Books</Link>
                        <Link to='/cart' className='footer__Link'>Cart</Link>
                        <div className='footer__copyright'>Copyright &copy; 2026 Library</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;