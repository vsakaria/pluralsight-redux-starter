import React from 'react';
import { Link } from 'react-router';

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
        alert(`Saving ${this.state.course.title}`);
    }

    render () {
        return (
            <section>
                <h1>Courses</h1>
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

export default CoursesPage;