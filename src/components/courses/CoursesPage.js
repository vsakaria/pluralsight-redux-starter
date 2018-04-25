import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';

class CoursesPage extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.redirecToAddCoursePage = this.redirecToAddCoursePage.bind(this);
    }

    courseRow (course, index) {
        return <section key={index}>{course.title}</section>;
    }

    redirecToAddCoursePage () {
        browserHistory.push('/course');
    }

    render () {
        const { courses } = this.props;

        return (
            <section>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirecToAddCoursePage} />
                <CoursesList courses={courses} />
            </section>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired
};

function mapStateToProps (state, ownProps) {

    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);