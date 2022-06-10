import PropTypes from "prop-types";
import { Button } from "./Button";
import React from "react";

const Header = ({ title, onAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onAdd} />
        </header>
    );
};

Header.defaultProps = {
    title: "Task Tracker",
};

Header.propTypes = {
    title: PropTypes.string,
};

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;