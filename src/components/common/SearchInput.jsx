import React, { useState } from "react";
import { Select } from "antd";
import PropType from "prop-types";
import { useDispatch } from "react-redux";

import { search } from "../../store/global/global.actions";

const { Option } = Select;

const SearchInput = ({ setPressed }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        type: "MC_number",
        input: "",
    });

    const handleSelect = (value) => {
        setData({ ...data, type: value });
    };

    const handleChange = (e) => {
        setData({ ...data, input: e.target.value });
    };

    const handleSubmit = () => {
        search(dispatch, { [data.type]: data.input });
        setPressed(true);
    };

    return (
        <div className="search-input">
            <Select
                onChange={handleSelect}
                defaultValue={data.type}

            >
                <Option value="MC_number">MC</Option>
                <Option value="DOT_number">DOT Number</Option>
                <Option value="name">Name</Option>
            </Select>
            <div className="input">
                <input
                    name="input"
                    value={data.form}
                    onChange={handleChange}

                />
            </div>
            <div className="search-icon-container" onClick={handleSubmit}>
                <img src="/assets/images/icons/search.svg" />
            </div>
        </div>
    );
};

SearchInput.propTypes = {
    setPressed: PropType.func.isRequired,
};

export default SearchInput;
