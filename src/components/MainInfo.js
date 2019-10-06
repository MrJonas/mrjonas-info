import React from 'react';
import { texts } from './../texts';
import { ResumeButton, LinkedinLink } from '.'

const { main } = texts;

export const MainInfo = () => (
    <div className="center">
        <h1>{main.title} <LinkedinLink /></h1>
        <h6 className="text-muted">{main.subtitle}</h6>
        <h3 className="mt-4"><ResumeButton /></h3>
    </div>
);