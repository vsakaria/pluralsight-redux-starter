import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';

export default (
    <Router path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="home" component={HomePage} />
        <Route path="courses" component={CoursesPage} />
    </Router>
);


