import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const storedLang = localStorage.getItem('lm-language');
        if (storedLang && ['fr', 'en', 'ar'].includes(storedLang)) {
            return storedLang;
        }
        return 'fr';
    });

    const t = translations[language] || translations['fr'];

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('lm-language', lang);
    };

    useEffect(() => {
        // Handle RTL for Arabic
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
