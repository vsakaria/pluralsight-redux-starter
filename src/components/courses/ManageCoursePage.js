import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

export class ManageCoursePage extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course)});
        }
    }

    isValid() {
        let isValid = true;
        let errors = {};

        if(this.state.course.title.length < 5) {
            errors = { title: 'Some error' };
            let isValid = true;
        }

        this.setState({ errors: errors });
        return isValid;
    }

    saveCourse(e) {
        e.preventDefault();

        if(this.isValid() === false) {
            return;
        }

        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => {
                this.setState({saving: false});
                this.context.router.push('/courses');
            })
            .catch(() => {
                this.setState({saving: false});
            });
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
                saving={this.state.saving}
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

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps (state, ownProps) {

    let course = handleCourseData(state, ownProps);
    const authorFormattedForDropDown = handleAuthorDropDown(state);

    return {
        course: course,
        authors: authorFormattedForDropDown
    };
}

export function handleAuthorDropDown (state) {
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
        return state.courses.find(course => course.id == ownProps.params.id) || [];
    }

    return course = {
        id: '',
        title: '',
        watchHref: '',
        authorId: '',
        length: '',
        category: ''
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);