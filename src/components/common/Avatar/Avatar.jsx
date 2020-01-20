import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './Avatar.scss'
import generateColorAva from "../../../helpers/generateColorAva";

const Avatar = ({user}) => {

    if (user.avatar) {
        return (
            <img className='avatar' src={user.avatar} alt={`Avatar${user.fullname}`}/>
        );
    } else {
        const {color, colorLighten} = generateColorAva(user.id);
        const firstChar = user.fullname[0].toUpperCase();
        return <div
            style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)`}}
            className='avatar avatar--symbol'>{firstChar}</div>
    }

};

Avatar.propTypes = {
    className: PropTypes.string
};

export default Avatar;