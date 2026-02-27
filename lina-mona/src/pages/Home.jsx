import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Eye, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import heroImg from '../assets/institue1.webp';
import aboutImg from '../assets/lashes.png';
import ctaImg from '../assets/institue3.webp';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
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
    const { t, language } = useLanguage();
    const h = t.home;

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
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                    >
                        <motion.span variants={fadeIn} className="hero-subtitle">{h.heroSubtitle}</motion.span>
                        <motion.h1 variants={fadeIn}>{h.heroTitle}</motion.h1>
                        <motion.p variants={fadeIn}>{h.heroDesc}</motion.p>
                        <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                            <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-artisanal">
                                {h.heroBtn} <ArrowRight size={18} />
                            </a>
                            <Link to="/prestations" className="btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)' }}>
                                {h.heroBtn2}
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
                        <motion.span variants={fadeIn} className="section-subtitle">{h.specSubtitle}</motion.span>
                        <motion.h2 variants={fadeIn} className="section-title" style={{ marginBottom: '1rem' }}>{h.specTitle}</motion.h2>
                        <motion.p variants={fadeIn} style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--accent-light)' }}>
                            {h.specDesc}
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
                            <h3>{h.service1Title}</h3>
                            <p style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                {h.service1Desc}
                            </p>
                            <Link to="/prestations" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {h.seePrices} <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn} className="service-card">
                            <div className="service-icon"><Eye size={32} /></div>
                            <h3>{h.service2Title}</h3>
                            <p style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                {h.service2Desc}
                            </p>
                            <Link to="/prestations" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {h.seePrices} <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn} className="service-card">
                            <div className="service-icon"><Sparkles size={32} /></div>
                            <h3>{h.service3Title}</h3>
                            <p style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                {h.service3Desc}
                            </p>
                            <Link to="/prestations" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {h.seePrices} <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section about" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="about-grid">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                            <img src={aboutImg} alt="Institut Lina Mona" className="about-img" style={{ objectFit: 'cover', borderRadius: '30px' }} />
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                            dir={language === 'ar' ? 'rtl' : 'ltr'}
                        >
                            <motion.span variants={fadeIn} className="section-subtitle" style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{h.experienceSubtitle}</motion.span>
                            <motion.h2 variants={fadeIn}>{h.experienceTitle}</motion.h2>
                            <motion.p variants={fadeIn}>{h.experienceDesc1}</motion.p>
                            <motion.p variants={fadeIn}>{h.experienceDesc2}</motion.p>

                            <motion.div variants={fadeIn} style={{ marginTop: '2rem' }}>
                                <Link to="/a-propos" className="btn-primary" style={{ backgroundColor: 'var(--primary)' }}>
                                    {h.discoverStory}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="cta-banner" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        style={{ flex: '1 1 50%', minHeight: '400px' }}
                    >
                        <img src={ctaImg} alt="Lina Mona Institut Beauté" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '6rem 4rem', textAlign: 'left', backgroundColor: 'var(--primary)' }}
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                    >
                        <motion.h2 variants={fadeIn} style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#fff' }}>{h.ctaTitle}</motion.h2>
                        <motion.p variants={fadeIn} style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, color: '#fff', whiteSpace: 'pre-line' }}>
                            {h.ctaDesc}
                        </motion.p>
                        <motion.a variants={fadeIn} href={bookingUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1.2rem 2.5rem' }}>
                            {h.ctaBtn} <Calendar size={18} />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
