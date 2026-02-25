import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Calendar } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const Contact = () => {
    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";

    return (
        <div style={{ paddingTop: '100px', backgroundColor: 'var(--background)' }}>
            <Helmet>
                <title>Contact & Réservation | Lina Mona Toulouse</title>
                <meta name="description" content="Prenez rendez-vous avec la LM TEAM. Coordonnées de l'Institut Lina Mona, adresse à Toulouse (Port Saint-Sauveur) et révervations Planity 20h-minuit." />
            </Helmet>
            <section className="section">
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <motion.span variants={fadeIn} className="section-subtitle">VENIR NOUS VOIR</motion.span>
                        <motion.h1 variants={fadeIn} style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Contact & Réservation</motion.h1>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                        {/* Infos Contact */}
                        <motion.div
                            initial="hidden" animate="visible" variants={staggerContainer}
                            style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}
                        >
                            <motion.h3 variants={fadeIn} style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Nos Coordonnées</motion.h3>

                            <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ color: 'var(--primary)' }}><MapPin size={28} /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Adresse</h4>
                                    <p style={{ color: 'var(--accent-light)', lineHeight: '1.5' }}>
                                        46 Port Saint-Sauveur,<br />
                                        31000 Toulouse,<br />
                                        France
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ color: 'var(--primary)' }}><Clock size={28} /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Horaires d'Ouverture</h4>
                                    <ul style={{ color: 'var(--accent-light)', lineHeight: '1.8' }}>
                                        <li><strong style={{ color: 'var(--accent)' }}>Lun - Mar:</strong> 09:00 - 20:00</li>
                                        <li><strong style={{ color: 'var(--accent)', opacity: 0.6 }}>Mer:</strong> Fermé</li>
                                        <li><strong style={{ color: 'var(--accent)' }}>Jeu - Sam:</strong> 09:00 - 20:00</li>
                                        <li><strong style={{ color: 'var(--accent)', opacity: 0.6 }}>Dim:</strong> Fermé</li>
                                    </ul>
                                    <p style={{ marginTop: '1rem', padding: '0.8rem', backgroundColor: 'var(--secondary)', borderRadius: '10px', fontSize: '0.9rem' }}>
                                        🌙 <strong>Disponibilité Nocturne:</strong> Les rendez-vous sont possibles de 20h à Minuit (avec 20% de majoration).
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Action Card */}
                        <motion.div
                            initial="hidden" animate="visible" variants={staggerContainer}
                            style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '3rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                        >
                            <motion.div variants={fadeIn} style={{ marginBottom: '2rem' }}>
                                <Calendar size={60} strokeWidth={1} />
                            </motion.div>
                            <motion.h3 variants={fadeIn} style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem' }}>Prendre Rendez-vous</motion.h3>
                            <motion.p variants={fadeIn} style={{ opacity: 0.9, marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '300px' }}>
                                Retrouvez nos disponibilités en temps réel sur Planity et réservez votre créneau instantanément.
                            </motion.p>
                            <motion.a
                                variants={fadeIn}
                                href={bookingUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                                style={{ backgroundColor: '#fff', color: 'var(--accent)', padding: '1.2rem 2.5rem' }}
                            >
                                Réserver en ligne
                            </motion.a>
                        </motion.div>

                    </div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        style={{ marginTop: '4rem', borderRadius: '20px', overflow: 'hidden', height: '400px', backgroundColor: '#e5e5e5' }}
                    >
                        {/* Embed Google Maps or Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.3871987542986!2d1.455648876403063!3d43.598463571105435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb16c738debd%3A0x6bfe321013d5a454!2s46%20Port%20Saint-Sauveur%2C%2031000%20Toulouse!5e0!3m2!1sfr!2sfr!4v1709400000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lina Mona Location"
                        ></iframe>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
