import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
    }

    render () {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps (state, ownProps) {
    //Empty course data for new course.
    console.log(state);

    let course = {
        id: '',
        title: '',
        watchHref: '',
        authorId: '',
        length: '',
        category: ''
      };
    const authorFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);