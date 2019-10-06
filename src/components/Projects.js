import React from 'react';
import { ProjectCard } from '.';
import { Row } from 'reactstrap';
import { texts } from './../texts';

const { projects } = texts;

export const Projects = () => (
    <React.Fragment>
        <h3 className="mt-3">{projects.title}</h3>
        <Row>
            {projects.items.map(project => (<ProjectCard key={project.name} {...project} />))}
        </Row>
    </React.Fragment>
);