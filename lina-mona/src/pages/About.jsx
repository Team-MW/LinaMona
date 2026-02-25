import React from 'react';
import { motion } from 'framer-motion';
import browsImg from '../assets/brows.png';
import lashesImg from '../assets/lashes.png';

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

const About = () => {
    return (
        <div style={{ paddingTop: '100px', backgroundColor: 'var(--background)' }}>
            <section className="section" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <motion.span variants={fadeIn} className="section-subtitle">NOTRE PHILOSOPHIE</motion.span>
                        <motion.h1 variants={fadeIn} style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>À Propos de Lina Mona</motion.h1>
                        <motion.p variants={fadeIn} style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--accent-light)', fontSize: '1.1rem' }}>
                            Découvrez l'Institut de beauté Lina Mona, un véritable joyau situé au cœur de Toulouse,
                            dédié à sublimer l'art de votre regard.
                        </motion.p>
                    </motion.div>

                    <div className="about-grid" style={{ gap: '5rem', marginBottom: '6rem' }}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                            <img src={browsImg} alt="Institut" className="about-img" style={{ boxShadow: 'none', borderRadius: '30px' }} />
                        </motion.div>

                        <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                            <motion.h2 variants={fadeIn} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>L'Excellence & Le Sur-Mesure</motion.h2>
                            <motion.p variants={fadeIn} style={{ fontSize: '1.1rem', color: 'var(--accent-light)', marginBottom: '1.5rem' }}>
                                Chez Lina Mona, nous croyons que chaque visage possède sa propre harmonie naturelle. Notre mission n'est pas de transformer, mais de révéler.
                            </motion.p>
                            <motion.p variants={fadeIn} style={{ fontSize: '1.1rem', color: 'var(--accent-light)', marginBottom: '1.5rem' }}>
                                Spécialisées dans la dermo-pigmentation (Microblading, Shading), le Browlift et le rehaussement de cils, notre équipe experte
                                (LM TEAM) maîtrise les dernières techniques de pointe pour vous garantir un résultat impeccable, subtil et durable.
                            </motion.p>
                            <motion.div variants={fadeIn} style={{ padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '20px', marginTop: '2rem' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Notre Promesse</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem' }}>Une écoute attentive, des conseils personnalisés, et une hygiène irréprochable dans un cadre premium.</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="about-grid" style={{ gap: '5rem', gridTemplateColumns: '1fr 1fr' }}>
                        <motion.div
                            className="about-content"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                            style={{ paddingLeft: '2rem', order: window.innerWidth <= 992 ? 2 : 1 }}
                        >
                            <motion.h2 variants={fadeIn} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>La "LM TEAM"</motion.h2>
                            <motion.p variants={fadeIn} style={{ fontSize: '1.1rem', color: 'var(--accent-light)', marginBottom: '1.5rem' }}>
                                Formées aux méthodes les plus rigoureuses, nos techniciennes sont de véritables passionnées.
                                De la restructuration de votre ligne de sourcil idéale au choix de la teinte parfaite pour vos cils,
                                vous êtes entre des mains expertes.
                            </motion.p>
                            <motion.div variants={fadeIn} className="stats-grid" style={{ marginTop: '2rem' }}>
                                <div className="stat-item">
                                    <h4 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>+500</h4>
                                    <p>Sourcils sublimés</p>
                                </div>
                                <div className="stat-item">
                                    <h4 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>4.9/5</h4>
                                    <p>Sur Planity</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ order: window.innerWidth <= 992 ? 1 : 2 }}>
                            <img src={lashesImg} alt="Technique Beauté" className="about-img" style={{ boxShadow: 'none', borderRadius: '30px' }} />
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
