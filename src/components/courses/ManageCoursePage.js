import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
    }

    saveCourse(e) {
        e.preventDefault();
        //Get data and pass it to the actions.
        //Trigger action.
        this.props.actions.saveCourse(this.state.course);
    }

    updateCourseState(e) {
        const field = e.target.name;
        let course = Object.assign(this.state.course);
        course[field] = e.target.value;
        return this.setState({ course: course });
    }

    render () {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {

    let course = handleCourseData(state, ownProps);
    const authorFormattedForDropDown = handleAuthorDropDown(state);

    return {
        course: course,
        authors: authorFormattedForDropDown
    };
}

function handleAuthorDropDown (state) {
    return state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}

function handleCourseData (state, ownProps) {
    let course;
    let existingCourse = ownProps.params.id;

    if (existingCourse) {
        return state.courses.find(course => course.id == ownProps.params.id);
    } else {
        return course = {
            id: '',
            title: '',
            watchHref: '',
            authorId: '',
            length: '',
            category: ''
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);