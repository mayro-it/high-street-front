import React from 'react';
import PropType from 'prop-types';

const RelationBox = ({ text, icon }) => {
    return (
        <div className='relation-box'>
            <div className='image-box'>
                <img src={icon} />
            </div>
            <div className='text-container'>
                <span>{text}</span>
            </div>
        </div>
    )
};

RelationBox.propTypes = {
    icon: PropType.string.isRequired,
    text: PropType.string.isRequired,
}

export default RelationBox;
