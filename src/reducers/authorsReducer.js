import initState from './initState';

export default function authorReducer(state = initState.authors, action) {
    switch(action.type) {
        case 'LOAD_AUTHORS_SUCCESS':
            console.log('ACTION', action.authors)
            return action.authors;
        default:
            return state;
    }
}