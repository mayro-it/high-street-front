import React, { useLayoutEffect, useRef } from 'react';
import PropType from 'prop-types';
import RelationBox from '../../components/simpleUIComponents/RelationBox';


const Relations = ({ positions, setPosition }) => {

    const ref = useRef();

    useLayoutEffect(() => {
        setPosition({ ...positions, relations: ref.current.offsetTop });
    }, []);

    return (
        <section className='relations-section' ref={ref}>
            <div className='relations-section-header'>
                <span>Carrier relations</span>
            </div>
            <div className='relations-section-body'>
                <RelationBox icon='/assets/images/icons/person.svg' text="Acknowledge and master true customers’ needs." />
                <RelationBox icon='/assets/images/icons/speed.svg' text='Secure and rapid performance troughtout trucking journey.' />
                <RelationBox icon='/assets/images/icons/cart.svg' text='Having customers in mind in every decision.' />
            </div>
        </section>
    )
};

Relations.propTypes = {
    positions: PropType.object.isRequired,
    setPosition: PropType.func.isRequired,
}

export default Relations
