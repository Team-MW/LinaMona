import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// L'animation "Wipe" (rideau qui balaie l'écran)
const wipeVariants = {
    initial: {
        originY: 1,
        scaleY: 1
    },
    animate: {
        originY: 1,
        scaleY: 0,
        transition: {
            duration: 1,
            ease: [0.87, 0, 0.13, 1]
        }
    },
    exit: {
        originY: 0,
        scaleY: 1,
        transition: {
            duration: 1,
            ease: [0.87, 0, 0.13, 1]
        }
    }
};

const PageTransition = ({ children }) => {
    return (
        <>
            {children}
            <motion.div
                className="transition-overlay"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={wipeVariants}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'var(--primary)',
                    zIndex: 9999,
                    pointerEvents: 'none'
                }}
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '3rem', fontStyle: 'italic', letterSpacing: '4px' }}>Lina Mona</div>
            </motion.div>
        </>
    );
};

export default PageTransition;
