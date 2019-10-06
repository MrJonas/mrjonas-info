import React from 'react';
import { texts } from './../texts';
import { Button } from 'reactstrap';

export const ResumeButton = () => (
    <a
        href={texts.main.resume.button_link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Button outline color="secondary" size="lg">{texts.main.resume.button_text}</Button>
    </a>
);