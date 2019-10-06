import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

export const SkillList = ({ skills, color }) => (
    <div className='center'>
        {skills.map(skill => (<Badge key={skill} color={color} pill>{skill}</Badge>))}
    </div>
);

SkillList.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string
};

SkillList.defaultProps = {
    color: 'info'
}