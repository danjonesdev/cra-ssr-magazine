import sanity from './sanity';

export const SEARCH_ARTICLES = 'auth/SEARCH_ARTICLES';

const initialState = { currentProfiles: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLES:
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
      id: `*${props.id}*`,
    };

    console.log(params.id);

    const query = `*[_type == "post" && title match $id] | order(publishedAt desc) [${
      params.limit
    }] {
    ...,
    author->,
    category->,
    "mainImage": mainImage.asset->url,
  }`;

    sanity.fetch(query, params).then(articlesLatest => {
      dispatch({ type: SEARCH_ARTICLES, articlesLatest });
      resolve(articlesLatest);
    });
  });

export const removeCurrentSubjects = () => dispatch =>
  new Promise(resolve => {
    dispatch({ type: SEARCH_ARTICLES, articlesLatest: {} });
    resolve({});
  });
