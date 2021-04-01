import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Gradient from '../sections/Gradient';
import Main from '../sections/Main';
import Relations from '../sections/Relations';
import Search from '../sections/Search';

const MainRouter = () => {
    const [elemPositions, setElemPosition] = useState({
        main: 0,
        relations: 835 - 100,
        search: 835 + 495-200,
        gradient: 835 + 495 + 480 - 100,
    });
    const handleScroll = (key) => {
        console.log(elemPositions);
        console.log(key);
        window.scrollTo({
            behavior: "smooth",
            top: elemPositions[key],
        })
    }
    return (
        <div className='main-container'>
            <Header handleScroll={handleScroll} />
            <Main />
            <Relations positions={elemPositions} setPosition={setElemPosition} />
            <Search positions={elemPositions} setPosition={setElemPosition} />
            <Gradient positions={elemPositions} setPosition={setElemPosition} />

            <Footer />
        </div>
    );
};

export default withRouter(MainRouter);
