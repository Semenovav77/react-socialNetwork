import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './Block.scss'

const Block = ({children, className}) => {
    return (
        <div className={classNames('block', className)}>{children}</div>
    );
};

export default Block;