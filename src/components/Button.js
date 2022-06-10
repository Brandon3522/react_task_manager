import PropTypes from "prop-types";
import React from "react";

export const Button = (props) => {
    const onClick = () => {
        console.log("click");
    };

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: props.color }}
            className="btn"
        >
            {props.text}
        </button>
    );
};

Button.defaultProps = {
    color: "steelblue",
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
};
