import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onTitleChange (event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course:  course});
    }

    onClick () {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow (course, index) {
        return <section key={index}>{course.title}</section>;
    }

    render () {
        return (
            <section>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <input
                    name="course"
                    type="text"
                    value={this.state.course.title}
                    onChange={this.onTitleChange} />

                <input
                    type="submit"
                    value="Submit"
                    onClick={this.onClick} />
            </section>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);