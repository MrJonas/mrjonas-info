import React from 'react';
import { texts } from './../texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const LinkedinLink = () => (
    <a
        href={texts.main.linkedin_link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
);