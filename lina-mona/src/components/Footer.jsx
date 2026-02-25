import React from 'react';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";

    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Lina Mona</h3>
                        <p>Institut de beauté à Toulouse spécialisé dans la beauté du regard, l'art du sourcil et du maquillage permanent.</p>
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Accueil</Link>
                            <Link to="/prestations" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Prestations</Link>
                            <Link to="/a-propos" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>À Propos</Link>
                            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</Link>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Coordonnées</h3>
                        <p>
                            <span className="icon-container"><MapPin size={20} /></span>
                            <span>46 Port Saint-Sauveur,<br />31000 Toulouse</span>
                        </p>
                        <a href={bookingUrl} target="_blank" rel="noreferrer">
                            <span className="icon-container"><Navigation size={20} /></span>
                            <span>Prendre rendez-vous</span>
                        </a>
                    </div>

                    <div className="footer-col">
                        <h3>Horaires</h3>
                        <p><span className="icon-container"><Clock size={20} /></span> Lundi - Samedi : 09:00 - 20:00</p>
                        <p style={{ marginLeft: "35px" }}>Rdv Nocturne jusqu'à Minuit disponible</p>
                        <p><span className="icon-container" style={{ opacity: 0.5 }}><Clock size={20} /></span> Mercredi & Dimanche : Fermé</p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '25px' }}>
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <Star size={16} fill="#c2b2a1" color="#c2b2a1" />
                            <span style={{ fontWeight: '500', marginLeft: '5px' }}>4.9 étoiles sur Planity</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Lina Mona. Réalisé avec élégance.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
