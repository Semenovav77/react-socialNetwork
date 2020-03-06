import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './Avatar.scss'
import generateColorAva from "../../../helpers/generateColorAva";

const Avatar = ({photos, userName, id}) => {

    if (photos.small) {
        return (
            <img className='avatar' src={photos.small} alt={`Avatar${userName}`}/>
        );
    } else {
        const idStr=id.toString();
        const {color, colorLighten} = generateColorAva(idStr);
        const firstChar = userName[0].toUpperCase();
        return <div
            style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)`}}
            className='avatar avatar--symbol'>{firstChar}</div>
    }

};

Avatar.propTypes = {
    className: PropTypes.string
};

export default Avatar;