import authorApi from '../api/mockAuthorApi';
import { ajaxCalled } from './ajaxActions';

export function loadAuthorSuccess (authors) {
    return { type: 'LOAD_AUTHORS_SUCCESS', authors };
}

export function loadAuthors () {
    return function (dispatch) {
        dispatch(ajaxCalled());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(err => {
            throw(err);
        });
    };
}
