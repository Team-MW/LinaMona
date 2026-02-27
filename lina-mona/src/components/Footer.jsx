import React from 'react';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";
    const { t } = useLanguage();
    const f = t.footer;

    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Lina Mona</h3>
                        <p>{f.description}</p>
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.nav.home}</Link>
                            <Link to="/prestations" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.nav.prestations}</Link>
                            <Link to="/a-propos" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.nav.about}</Link>
                            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.nav.contact}</Link>
                            <Link to="/mentions-legales" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginTop: '1rem', fontSize: '0.8rem' }}>{f.legal}</Link>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>{f.coordinates}</h3>
                        <p>
                            <span className="icon-container"><MapPin size={20} /></span>
                            <span>46 Port Saint-Sauveur,<br />31000 Toulouse</span>
                        </p>
                        <a href={bookingUrl} target="_blank" rel="noreferrer">
                            <span className="icon-container"><Navigation size={20} /></span>
                            <span>{f.bookAppointment}</span>
                        </a>
                    </div>

                    <div className="footer-col">
                        <h3>{f.schedule}</h3>
                        <p><span className="icon-container"><Clock size={20} /></span> {f.scheduleMain}</p>
                        <p style={{ marginLeft: "35px" }}>{f.scheduleNight}</p>
                        <p><span className="icon-container" style={{ opacity: 0.5 }}><Clock size={20} /></span> {f.scheduleClosed}</p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '25px' }}>
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <span style={{ fontWeight: '500', marginLeft: '5px' }}>{f.stars}</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Lina Mona. {f.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
