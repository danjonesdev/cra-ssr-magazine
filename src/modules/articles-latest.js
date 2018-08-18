import sanity from './sanity'

export const LATEST_ARTICLES = 'auth/LATEST_ARTICLES';

const initialState = { currentProfiles: {} };

export default(state = initialState, action) => {
  switch (action.type) {
    case LATEST_ARTICLES:
      return {
        ...state,
        currentProfiles: action.articlesLatest
      };
    default:
      return state;
  }
};

export const getCurrentProfiles = id => dispatch => new Promise(resolve => {
  const query =
  `*[_type == "post"] | order(publishedAt desc) [0..3] {
    ...,
    author->,
    category->,
    "mainImage": mainImage.asset->url,
  }`;

  sanity.fetch(query).then(articlesLatest => {
    dispatch({type: LATEST_ARTICLES, articlesLatest});
    resolve(articlesLatest);
  })
});

export const removeCurrentProfiles = () => dispatch => new Promise(resolve => {
  dispatch({type: LATEST_ARTICLES, articlesLatest: {}});
  resolve({});
});
