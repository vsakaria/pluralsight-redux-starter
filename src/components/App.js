import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import Header from './common/Header';

class App extends React.Component {
    render () {
        return (
            <section className="container-fluid">
                <Header />
                {this.props.children}
            </section>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;