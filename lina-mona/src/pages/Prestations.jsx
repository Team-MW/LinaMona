import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info } from 'lucide-react';
import lashesImg from '../assets/lashes.png';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const Prestations = () => {
    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";

    return (
        <div style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
            {/* Page Header */}
            <section className="section" style={{ paddingBottom: '2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.span variants={fadeIn} className="section-subtitle">LA CARTE DES SOINS</motion.span>
                        <motion.h1 variants={fadeIn} style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Nos Prestations</motion.h1>
                        <motion.p variants={fadeIn} style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--accent-light)', fontSize: '1.1rem' }}>
                            Découvrez nos tarifs et soins signatures. Nous utilisons des techniques de pointe
                            pour sublimer votre regard de manière durable et harmonieuse.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>

                        {/* Category 1 */}
                        <motion.div
                            className="service-card"
                            style={{ padding: '3rem' }}
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                        >
                            <h3 style={{ fontSize: '2rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                                Browlift & Entretien Sourcils
                            </h3>
                            <div className="service-list" style={{ gap: '1.5rem' }}>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>BROWLIFT SIGNATURE - restructuration X décoloration <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>Sans épilation • 1h</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>50 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>BROWLIFT SIGNATURE - restructuration X décoloration X teinture <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>1h 30min</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>60 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>BROWS SCULPT | restructuration X décoloration <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>Sans épilation • 30min</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>20 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Épilation, Restructuration & Coloration <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>Tenue moyenne: 2 semaines sur peau, 1 mois sur poil.</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>40 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Épilation, Restructuration <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>15min</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>20 €</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Break */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ borderRadius: '20px', overflow: 'hidden', height: '400px' }}>
                            <img src={lashesImg} alt="Lashes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>

                        {/* Category 2 */}
                        <motion.div
                            className="service-card"
                            style={{ padding: '3rem' }}
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                        >
                            <h3 style={{ fontSize: '2rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                                Rehaussement de Cils
                            </h3>
                            <div className="service-list" style={{ gap: '1.5rem' }}>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>LASH LIFT COREEN - rehaussement de cils <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>1h</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>50 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>LASH LIFT COREEN - rehaussement de cils X teinture <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>1h 30min</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>55 €</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Category 3 */}
                        <motion.div
                            className="service-card"
                            style={{ padding: '3rem', backgroundColor: '#fff', border: '1px solid var(--primary)' }}
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                                <Info size={18} />
                                <span style={{ fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>RDV NOCTURNE & PRESTATIONS PREMIUM</span>
                            </div>
                            <h3 style={{ fontSize: '2rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                                Maquillage Permanent (Sourcils)
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--accent-light)', marginBottom: '2rem', backgroundColor: 'var(--background)', padding: '1rem', borderRadius: '10px' }}>
                                🌙 <strong>Toulouse - RDV Nocturne (20h à Minuit)</strong> : Une majoration de 20% est appliquée pour les rendez-vous pris après 20h.
                            </p>
                            <div className="service-list" style={{ gap: '1.5rem' }}>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Microblading (Poil à poil) <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>1h</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>420 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Shading Brows (Ombré) <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>1h</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>420 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Combo Brows (Microblading & Shading) <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>1h</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>480 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Retouche Fixatrice (1 à 3 mois) <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>Microblading / Shading • 30min</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>96 €</span>
                                </div>
                                <div className="service-item">
                                    <span className="service-name" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Retouche Fixatrice (1 à 3 mois) <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 'normal', marginTop: '4px' }}>Combo Brows • 30min</span></span>
                                    <span className="service-price" style={{ fontSize: '1.2rem' }}>156 €</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                            Réserver votre séance <Calendar size={20} style={{ marginLeft: '10px' }} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Prestations;
