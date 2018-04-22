import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default (
    <Router path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="home" component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
    </Router>
);


