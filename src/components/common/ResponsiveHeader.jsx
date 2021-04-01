import React, { useState } from "react";
import PropTypes from "prop-types";

const ResponsiveHeader = ({ handleScroll, close }) => {
    const [activeNav, setActiveNav] = useState("relations");
    const handleRedirect = (loc) => {
        setActiveNav(loc);
        handleScroll(loc);
        close();
    };
    return (
        <div className="responsive-header">
            <nav className="responsive-navbar">
                <span
                    className={activeNav === "relations" ? "active" : ""}
                    onClick={() => handleRedirect("relations")}
                >
                    Carrier relations
                </span>
                <span
                    className={activeNav === "search" ? "active" : ""}
                    onClick={() => handleRedirect("search")}
                >
                    Search a Carriers
                </span>
                <span
                    className={activeNav === "gradient" ? "active" : ""}
                    onClick={() => handleRedirect("gradient")}
                >
                    About us
                </span>
            </nav>
        </div>
    );
};

ResponsiveHeader.propTypes = {
    handleScroll: PropTypes.func,
    close: PropTypes.func,
};

export default ResponsiveHeader;
