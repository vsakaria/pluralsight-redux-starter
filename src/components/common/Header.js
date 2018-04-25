import React, { PropTypes }  from 'react';
import { Link } from 'react-router';
import LoadDots from './LoadDots';

class Header extends React.Component {
    render () {
        return (
            <nav>
                <Link to="home">Home</Link> {" | "}
                <Link to="about">About</Link> {" | "}
                <Link to="courses">Courses</Link> {" | "}
                {this.props.loading && <LoadDots interval={100} dots={20} />}
            </nav>
        );
    }
}

export default Header;

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};


/*
Show and hide dots on ajax calls and end of ajax calls

1. Create ajax actions.
2. Create Ajax reducer.*/