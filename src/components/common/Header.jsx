import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import Modal from "antd/lib/modal/Modal";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = ({ handleScroll }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    const close = () => {
        setVisible(false);
    };
    const handleRedicrect = () => {
        handleScroll("main");
        close();
    };
    return (
        <header className="main-header">
            <div className="logo-container">
                <img
                    src="/assets/images/logo.svg"
                    onClick={() => handleScroll("main")}
                />
            </div>
            <nav className="main-navbar">
                <span onClick={() => handleScroll("relations")}>Carrier relations</span>
                <span onClick={() => handleScroll("search")}>
                    Search a Carriers
                </span>
                <span onClick={() => handleScroll("gradient")}>
                    About us
                </span>
            </nav>
            <div className="header-menu" onClick={() => setVisible(true)}>
                <img src="/assets/images/icons/menu.svg" />
            </div>
            {width <= 415 && (
                <Modal
                    className="header-modal"
                    footer={null}
                    onCancel={close}
                    visible={visible}
                    setVisible={setVisible}
                    mask={false}
                    title={
                        <img
                            src="/assets/images/logo.svg"
                            onClick={() => handleRedicrect()}
                        />
                    }
                >
                    <ResponsiveHeader
                        handleScroll={handleScroll}
                        close={close}
                    />
                </Modal>
            )}
        </header>
    );
};

Header.propTypes = {
    handleScroll: PropType.func.isRequired,
};

export default Header;
