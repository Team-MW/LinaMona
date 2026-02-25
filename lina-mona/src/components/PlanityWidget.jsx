import React from 'react';
import { Calendar } from 'lucide-react';

const PlanityWidget = () => {
    const bookingUrl = "https://www.planity.com/lina-mona-31000-toulouse";

    return (
        <a href={bookingUrl} target="_blank" rel="noreferrer" className="planity-widget">
            <div className="dot"></div>
            Réserver sur Planity
            <Calendar size={18} />
        </a>
    );
};

export default PlanityWidget;
