import React from 'react';
import '../style/ScrollBar.scss'; // Import CSS file for styling

// Component ScrollBar
const ScrollBar = ({ children }) => {
    return (
        <div className="scroll-container">
            <div className="scroll-content">
                {children}
            </div>
        </div>
    );
};

export default ScrollBar;
