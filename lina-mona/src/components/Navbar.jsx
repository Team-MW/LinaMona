import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Check initial scroll
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";
    const isHome = location.pathname === '/';

    return (
        <nav className={scrolled || !isHome ? 'glass active-nav' : ''} style={{ backgroundColor: !isHome && !scrolled ? 'var(--background)' : '' }}>
            <div className="container nav-container">
                <Link to="/" className="logo">Lina Mona</Link>
                <div className="nav-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/prestations">Prestations</Link>
                    <Link to="/a-propos">À Propos</Link>
                    <Link to="/contact">Contact</Link>
                    <a href={bookingUrl} target="_blank" rel="noreferrer" className="book-btn">Réserver</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
