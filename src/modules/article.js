import sanity from './sanity'

export const ARTICLE = 'auth/ARTICLE';

const initialState = {
  currentProfile: {}
};

export default(state = initialState, action) => {
  switch (action.type) {
    case ARTICLE:
      return {
        ...state,
        currentProfile: action.article
      };
    default:
      return state;
  }
};

export const getCurrentSubject = id => dispatch => new Promise(resolve => {
  const query =
  `*[_type == "post" && slug.current == $id][0] {
    ...,
    author->,
    category->,
    "mainImage": mainImage.asset->url,
  }`;

  const params = {
    id: id
  };

  sanity.fetch(query, params).then(article => {
    dispatch({type: ARTICLE, article});
    resolve(article);
  })
});

export const removeCurrentSubject = () => dispatch => new Promise(resolve => {
  dispatch({type: ARTICLE, article: {}});
  resolve({});
});
