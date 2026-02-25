import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Eye, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImg from '../assets/hero.png';
import browsImg from '../assets/brows.png';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Marquee = () => {
    const items = ["Beauté du Regard", "Browlift", "Lash Lift", "Microblading", "Shading", "Lina Mona", "Sur-mesure", "Élégance Naturelle"];
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {repeatedItems.map((item, idx) => (
                    <div key={idx} className="marquee-item">
                        {item} <span className="marquee-separator">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";

    return (
        <>
            <Helmet>
                <title>Lina Mona | Institut de Beauté & Expert du Regard à Toulouse</title>
                <meta name="description" content="Découvrez Lina Mona, institut de beauté premium situé à Toulouse, spécialisé dans la beauté du regard : Browlift, Rehaussement de cils, Microblading, Shading." />
            </Helmet>
            <section className="hero">
                <div className="hero-img-container">
                    <img src={heroImg} alt="Lina Mona Salon" />
                    <div className="hero-gradient"></div>
                </div>

                <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeIn} className="hero-subtitle">Institut de Beauté Premium</motion.span>
                        <motion.h1 variants={fadeIn}>Sublimez votre beauté naturelle.</motion.h1>
                        <motion.p variants={fadeIn}>
                            Un véritable joyau situé au cœur de Toulouse. Spécialiste du regard,
                            du browlift au microblading, nous sublimons votre visage avec précision et élégance.
                        </motion.p>
                        <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-artisanal">
                                Prendre Rendez-vous <ArrowRight size={18} />
                            </a>
                            <Link to="/prestations" className="btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)' }}>
                                Découvrir la carte
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Marquee />

            <section className="section" style={{ backgroundColor: 'var(--background)' }}>
                <div className="container">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <motion.span variants={fadeIn} className="section-subtitle">NOS SPÉCIALITÉS</motion.span>
                        <motion.h2 variants={fadeIn} className="section-title" style={{ marginBottom: '1rem' }}>L'Art du Regard</motion.h2>
                        <motion.p variants={fadeIn} style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--accent-light)' }}>
                            Découvrez nos prestations phares réalisées par nos expertes pour un résultat naturel et harmonieux.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="services-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn} className="service-card">
                            <div className="service-icon"><Scissors size={32} /></div>
                            <h3>Browlift & Sculpt</h3>
                            <p style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Restructuration, épilation, teinture et browlift pour un regard soulevé et un sourcil parfaitement dessiné.
                            </p>
                            <Link to="/prestations" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Voir les tarifs <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn} className="service-card">
                            <div className="service-icon"><Eye size={32} /></div>
                            <h3>Lash Lift Coréen</h3>
                            <p style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Rehaussement de cils profond pour ouvrir le regard et donner une courbure élégante de façon prolongée.
                            </p>
                            <Link to="/prestations" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Voir les tarifs <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn} className="service-card">
                            <div className="service-icon"><Sparkles size={32} /></div>
                            <h3>Maquillage Permanent</h3>
                            <p style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Microblading (poil à poil), Shading (ombré) ou Combo Brows pour des sourcils parfaits sans maquillage quotidien.
                            </p>
                            <Link to="/prestations" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Voir les tarifs <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section about" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        >
                            <img src={browsImg} alt="Sublime Eyebrows" className="about-img" />
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        >
                            <motion.span variants={fadeIn} className="section-subtitle" style={{ textAlign: 'left' }}>L'EXPÉRIENCE</motion.span>
                            <motion.h2 variants={fadeIn}>L'Élégance chez Lina Mona</motion.h2>
                            <motion.p variants={fadeIn}>
                                Bienvenue chez Lina Mona, votre espace dédié à la beauté du regard. Notre équipe experte (LM TEAM)
                                vous accueille dans un cadre élégant et apaisant pour vous offrir des prestations sur-mesure.
                            </motion.p>
                            <motion.p variants={fadeIn}>
                                Chaque visage est unique, c'est pourquoi nous adaptons nos techniques pour créer l'harmonie parfaite,
                                tout en respectant votre beauté naturelle.
                            </motion.p>

                            <motion.div variants={fadeIn} style={{ marginTop: '2rem' }}>
                                <Link to="/a-propos" className="btn-primary" style={{ backgroundColor: 'var(--primary)' }}>
                                    Découvrir notre histoire
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    >
                        <h2>Prête à révéler votre beauté ?</h2>
                        <p>Réservez votre créneau en quelques clics via Planity. Nocturnes jusqu'à minuit disponibles.</p>
                        <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                            Voir les disponibilités <Calendar size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
