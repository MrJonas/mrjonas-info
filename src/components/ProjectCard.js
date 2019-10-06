import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { texts } from './../texts';

const { projects } = texts;

export const ProjectCard = ({ name, link_url, description, github_url }) => (
    <Col sm="6">
        <Card body inverse style={{ backgroundColor: '#424242', borderColor: '#424242' }}>
            <CardTitle>
                {!!link_url ? <a href={link_url} target="_blank" rel="noopener noreferrer">{name}</a> : name}
            </CardTitle>
            <CardText>{description}</CardText>
            <a href={github_url} target="_blank" rel="noopener noreferrer">
                <Button> <FontAwesomeIcon icon={faGithub} /> {projects.button}</Button>
            </a>
        </Card>
    </Col>
);