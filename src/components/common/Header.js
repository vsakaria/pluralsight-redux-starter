import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render () {
        return (
            <nav>
                <Link to="home">Home</Link> {" | "}
                <Link to="about">About</Link> {" | "}
                <Link to="courses">Courses</Link> {" | "}
            </nav>
        );
    }
}

export default Header;