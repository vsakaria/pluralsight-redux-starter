import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
    render () {
        return (
            <section className="container-fluid">
                <Header
                    loading={this.props.loading}/>
                {this.props.children}
            </section>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps (state, ownProps) {
    let loading = isLoading(state.ajaxCalls);

    return {
        loading: loading
    };
}

function isLoading (ajaxCalls) {
    return ajaxCalls > 0;
}

export default connect(mapStateToProps)(App);