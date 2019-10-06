import React from 'react';
import { texts } from './../texts';
import { SkillList } from '.';
import { Card } from 'reactstrap';

const { skills } = texts;

export const Skills = () => (
    <React.Fragment>
        <h3 className="mt-3">{skills.title}</h3>
        <Card body inverse style={{ backgroundColor: '#424242', borderColor: '#424242' }}>
        <p className="lead">{skills.paragraph_1}</p>
        <h4>
            <SkillList skills={skills.main} />
        </h4>
        <p className="lead">{skills.paragraph_2}</p>
        <h5>
            <SkillList skills={skills.other} color="secondary"/>
        </h5>
        </Card>
    </React.Fragment>
);