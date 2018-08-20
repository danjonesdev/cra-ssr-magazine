import sanity from './sanity'

export const AUTHORS = 'auth/AUTHORS';

const initialState = { currentProfiles: {} };

export default(state = initialState, action) => {
  switch (action.type) {
    case AUTHORS:
      return {
        ...state,
        currentProfiles: action.authors
      };
    default:
      return state;
  }
};

export const getCurrentSubject = id => dispatch => new Promise(resolve => {
  const query =
  `*[_type == "author"] [0..24] {
    ...,
    author->,
    categories[]->,
    "mainImage": image.asset->url,
  }`;

  sanity.fetch(query).then(authors => {
    dispatch({type: AUTHORS, authors});
    resolve(authors);
  })
});

export const removeCurrentSubjects = () => dispatch => new Promise(resolve => {
  dispatch({type: AUTHORS, authors: {}});
  resolve({});
});
