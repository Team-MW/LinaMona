import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Legal = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--background)', minHeight: '80vh' }}>
            <Helmet>
                <title>Mentions Légales | Lina Mona</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Mentions Légales</h1>
                    <p style={{ textAlign: 'center', color: 'var(--accent-light)', marginBottom: '4rem' }}>
                        En vigueur au {new Date().toLocaleDateString('fr-FR')}
                    </p>

                    <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>1. Éditeur du site</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--accent-light)' }}>
                            Le site internet est la propriété exclusive de <strong>Lina Mona</strong>.<br />
                            Institut de beauté et centre expert du regard.<br />
                            Adresse : 46 Port Saint-Sauveur, 31000 Toulouse, France.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>2. Hébergement</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--accent-light)' }}>
                            Le site est hébergé par Vercel Inc.<br />
                            340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>3. Propriété intellectuelle</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--accent-light)' }}>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>4. Données personnelles</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--accent-light)' }}>
                            Les informations recueillies via notre outil de réservation Planity sont soumises à la politique de confidentialité de Planity. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen sur la protection des données (RGPD), vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Legal;
