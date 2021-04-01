import React, { useLayoutEffect, useRef, useState } from 'react';
import PropType from 'prop-types';
import SearchInput from '../../components/common/SearchInput';
import { shallowEqual, useSelector } from 'react-redux';
import SuccessFailModal from '../../components/SuccessFailModal';


const Search = ({ positions, setPosition }) => {
    const ref = useRef();
    const { hasCarrier } = useSelector(s => s.global, shallowEqual);
    const [pressed, setPressed] = useState(false);

    useLayoutEffect(() => {
        setPosition({ ...positions, search: ref.current.offsetTop });
    }, []);
    return (
        <section className='search-section' ref={ref}>
            <div className='search-input-container'>
                <SearchInput setPressed={setPressed} />
                {pressed && <div className='answer-row'>
                    {hasCarrier ? <>
                       <SuccessFailModal  visible={pressed} setVisible={setPressed} hasCarrier={true}/>
                    </> : <>
                            <SuccessFailModal visible={pressed} setVisible={setPressed} hasCarrier={false} />
                        </>}
                </div>}
            </div>

        </section>
    )
};
Search.propTypes = {
    positions: PropType.object.isRequired,
    setPosition: PropType.func.isRequired,
}
export default Search;
