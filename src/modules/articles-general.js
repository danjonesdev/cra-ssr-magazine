import sanity from './sanity'

export const GENERAL_ARTICLES = 'auth/GENERAL_ARTICLES';

const initialState = { currentProfiles: {} };

export default(state = initialState, action) => {
  switch (action.type) {
    case GENERAL_ARTICLES:
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
  `*[_type == "post"][4..24] {
    ...,
    author->,
    categories[]->,
    "mainImage": mainImage.asset->url,
  }`;

  sanity.fetch(query).then(articlesLatest => {
    dispatch({type: GENERAL_ARTICLES, articlesLatest});
    resolve(articlesLatest);
  })
});

export const removeCurrentProfiles = () => dispatch => new Promise(resolve => {
  dispatch({type: GENERAL_ARTICLES, articlesLatest: {}});
  resolve({});
});
