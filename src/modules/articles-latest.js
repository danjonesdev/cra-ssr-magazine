import sanity from './sanity'

export const LATEST_ARTICLES = 'auth/LATEST_ARTICLES';

const initialState = {
  currentProfiles: {}
};

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
  // const query = `
  // *[_type == "article"]
  //  {
  //    title,
  //    "mainImg": mainImg.asset->url,
  //    "category": category[] {
  //     "categoryItem": articleCategoryList-> {
  //       categoryName
  //     }
  //   }
  //  }`;

  const query =
  `*[_type == "post"][0..1000] {
    ...,
    author->,
    categories[]->,
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
