import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup (saving) {
    let props = {
        course: {},
        saving: saving,
        errors: {},
        allAuthors: () => {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<CourseForm {...props} />);
}

describe('Course', () => {
    it('renders from and h1 enzyme', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is label save when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is label saving when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});