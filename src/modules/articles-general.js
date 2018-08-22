import sanity from './sanity';

export const GENERAL_ARTICLES = 'auth/GENERAL_ARTICLES';

const initialState = { currentProfiles: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_ARTICLES:
      return {
        ...state,
        currentProfiles: action.articlesLatest,
      };
    default:
      return state;
  }
};

export const getCurrentSubject = props => dispatch =>
  new Promise(resolve => {
    const params = {
      limit: `${props.limitFrom}..${props.limitTo}`,
    };

    const query = `*[_type == "post"] | order(publishedAt desc) [${
      params.limit
    }] {
    ...,
    author->,
    category->,
    "mainImage": mainImage.asset->url,
  }`;

    sanity.fetch(query).then(articlesLatest => {
      dispatch({ type: GENERAL_ARTICLES, articlesLatest });
      resolve(articlesLatest);
    });
  });

export const removeCurrentSubjects = () => dispatch =>
  new Promise(resolve => {
    dispatch({ type: GENERAL_ARTICLES, articlesLatest: {} });
    resolve({});
  });
