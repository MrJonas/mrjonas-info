import React from 'react';
import { texts } from './../texts';
import { Card } from 'reactstrap';

const { codewars } = texts;

export const Codewars = () => (
    <React.Fragment>
        <h3 className="mt-3">{codewars.title}</h3>
        <Card body inverse style={{ backgroundColor: '#424242', borderColor: '#424242' }}>
            <p className="lead">{codewars.description}</p>
            <div className="center">
                <img src={codewars.imageUrl} alt={codewars.imageAlt} />
            </div>
        </Card>
    </React.Fragment>
);