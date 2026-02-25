import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";
    const isHome = location.pathname === '/';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={scrolled || !isHome || isOpen ? 'glass active-nav' : ''} style={{ backgroundColor: !isHome && !scrolled && !isOpen ? 'var(--background)' : '' }}>
            <div className="container nav-container">
                <Link to="/" className="logo">Lina Mona</Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/prestations">Prestations</Link>
                    <Link to="/a-propos">À Propos</Link>
                    <Link to="/contact">Contact</Link>
                    <a href={bookingUrl} target="_blank" rel="noreferrer" className="book-btn">Réserver</a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
                <Link to="/prestations" onClick={() => setIsOpen(false)}>Prestations</Link>
                <Link to="/a-propos" onClick={() => setIsOpen(false)}>À Propos</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="book-btn-mobile">Réserver sur Planity</a>
            </div>
        </nav>
    );
};

export default Navbar;
