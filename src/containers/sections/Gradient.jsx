import React, { useLayoutEffect, useRef } from 'react';
import PropType from 'prop-types';
import MainInfoBox from '../../components/simpleUIComponents/MainInfoBox';

const Gradient = ({ positions, setPosition }) => {
    const ref = useRef();
    useLayoutEffect(() => {
        setPosition({ ...positions, gradient: ref.current.offsetTop });
    }, []);

    return (
        <section className='gradient-section' ref={ref}>
            <div className='gradient-section-header'>
                <div className='image-container'>
                    <img src='/assets/images/about.png' />
                </div>
                <div className='back-cover'>
             
                    <div className='text-container'>
                    <div className='text-container-header'>About us</div>
                        <div className='big-text'>
                            <span>
                            Outright solution of your transportation needs.Not only delivering your freight,
                            but managing your whole trucking trip!Always caring attitude regarding partners and clients.
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-container">
                <MainInfoBox count="1 000" text="Available Loads" />
                <MainInfoBox count="5 000" text="Carriers" />
                <MainInfoBox
                    count="100"
                    text="Trusting Customer"
                />
            </div>
        </section>
    )
};

Gradient.propTypes = {
    positions: PropType.object.isRequired,
    setPosition: PropType.func.isRequired,
}

export default Gradient;
