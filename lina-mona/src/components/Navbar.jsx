import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FLAGS = [
    {
        code: 'fr',
        label: 'Français',
        emoji: '🇫🇷',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="28" height="20" style={{ borderRadius: '4px', display: 'block' }}>
                <rect width="300" height="600" fill="#002395" />
                <rect x="300" width="300" height="600" fill="#fff" />
                <rect x="600" width="300" height="600" fill="#ED2939" />
            </svg>
        ),
    },
    {
        code: 'en',
        label: 'English',
        emoji: '🇬🇧',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="28" height="20" style={{ borderRadius: '4px', display: 'block' }}>
                <rect width="60" height="30" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
            </svg>
        ),
    },
    {
        code: 'ar',
        label: 'العربية',
        emoji: '🇸🇦',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="28" height="20" style={{ borderRadius: '4px', display: 'block' }}>
                <rect width="900" height="600" fill="#006C35" />
                <text x="450" y="330" textAnchor="middle" fontFamily="serif" fontSize="160" fill="white">🤍</text>
                <rect width="900" height="200" fill="#006C35" />
                <rect y="400" width="900" height="200" fill="#006C35" />
                <text x="450" y="340" textAnchor="middle" fontFamily="Arial" fontSize="110" fill="white">☪</text>
            </svg>
        ),
    },
];

// Cleaner flag SVGs using country codes
const FlagIcon = ({ code, size = 26 }) => {
    const flagMap = {
        fr: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width={size} height={Math.round(size * 2 / 3)} style={{ borderRadius: '3px', display: 'block', boxShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
                <rect width="1" height="2" fill="#002395" />
                <rect x="1" width="1" height="2" fill="#fff" />
                <rect x="2" width="1" height="2" fill="#ED2939" />
            </svg>
        ),
        en: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={size} height={Math.round(size * 30 / 60)} style={{ borderRadius: '3px', display: 'block', boxShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
                <clipPath id="ukclip"><rect width="60" height="30" rx="2" /></clipPath>
                <g clipPath="url(#ukclip)">
                    <rect width="60" height="30" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
                </g>
            </svg>
        ),
        ar: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width={size} height={Math.round(size * 2 / 3)} style={{ borderRadius: '3px', display: 'block', boxShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
                <rect width="3" height="2" fill="#007A3D" />
                <rect width="3" height="0.5" fill="#007A3D" />
                <rect y="1.5" width="3" height="0.5" fill="#007A3D" />
            </svg>
        ),
    };
    return flagMap[code] || null;
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { language, changeLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";
    const isHome = location.pathname === '/';
    const isRTL = language === 'ar';

    const toggleMenu = () => setIsOpen(!isOpen);

    const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'عر' },
    ];

    const flagEmojis = { fr: '🇫🇷', en: '🇬🇧', ar: '🇸🇦' };

    return (
        <nav
            className={scrolled || !isHome || isOpen ? 'glass active-nav' : ''}
            style={{
                backgroundColor: !isHome && !scrolled && !isOpen ? 'var(--background)' : '',
                direction: 'ltr', // Navbar stays LTR for layout consistency
            }}
        >
            <div className="container nav-container">
                <Link to="/" className="logo">Lina Mona</Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <Link to="/">{t.nav.home}</Link>
                    <Link to="/prestations">{t.nav.prestations}</Link>
                    <Link to="/a-propos">{t.nav.about}</Link>
                    <Link to="/contact">{t.nav.contact}</Link>

                    {/* Language Flags Desktop */}
                    <div className="lang-switcher desktop-langs" aria-label="Language switcher">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                                onClick={() => changeLanguage(lang.code)}
                                title={lang.label}
                                aria-label={`Passer en ${lang.label}`}
                            >
                                <img src={`https://flagcdn.com/w40/${lang.code === 'en' ? 'au' : lang.code === 'ar' ? 'sa' : lang.code}.png`} alt={lang.code} className="flag-icon-img" />
                            </button>
                        ))}
                    </div>

                    <a href={bookingUrl} target="_blank" rel="noreferrer" className="book-btn">
                        {t.nav.book}
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="mobile-actions">
                    {/* Language Flags Mobile */}
                    <div className="lang-switcher mobile-langs" aria-label="Language switcher mobile">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                                onClick={() => changeLanguage(lang.code)}
                                title={lang.label}
                            >
                                <img src={`https://flagcdn.com/w40/${lang.code === 'en' ? 'au' : lang.code === 'ar' ? 'sa' : lang.code}.png`} alt={lang.code} className="flag-icon-img" />
                            </button>
                        ))}
                    </div>
                    <div className="mobile-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <Link to="/" onClick={() => setIsOpen(false)}>{t.nav.home}</Link>
                <Link to="/prestations" onClick={() => setIsOpen(false)}>{t.nav.prestations}</Link>
                <Link to="/a-propos" onClick={() => setIsOpen(false)}>{t.nav.about}</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="book-btn-mobile">
                    {t.nav.book}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
