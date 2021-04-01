import React from 'react';
import PropType from 'prop-types';

const MainInfoBox = ({ count, text }) => {
    return (
        <div className='main-info-box'>
            <div className='count-container'>
                <span>{count}</span>
                <span className='plus'>+</span>
            </div>
            <div className='text-container'>
                <span>{text}</span>
            </div>
        </div>
    )
};

MainInfoBox.propTypes = {
    count: PropType.string.isRequired,
    text: PropType.string.isRequired,
}

export default MainInfoBox;
