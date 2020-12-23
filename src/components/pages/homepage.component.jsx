import React from 'react';
import './homepage.styles.scss';
import '../directory/directory.component';
import Directory from '../directory/directory.component';

export const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};
