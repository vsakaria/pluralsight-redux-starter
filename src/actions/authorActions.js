import authorApi from '../api/mockAuthorApi';

export function loadAuthorSuccess (authors) {
    return { type: 'LOAD_AUTHORS_SUCCESS', authors };
}

export function loadAuthors () {
    return function (dispatch) {
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(err => {
            throw(err);
        });
    };
}
