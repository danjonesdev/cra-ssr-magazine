import sanity from './sanity'

export const CATEGORY_ARTICLES = 'auth/CATEGORY_ARTICLES';

const initialState = { currentProfiles: {} };

export default(state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_ARTICLES:
      return {
        ...state,
        currentProfiles: action.articlesCategory
      };
    default:
      return state;
  }
};

export const getCurrentProfiles = id => dispatch => new Promise(resolve => {
  const query =
  `*[_type == "category" && slug.current == $id] {
      ...,
      "posts": *[_type == "post" && references(^._id)] {
        ...,
        author->,
        category->,
        "mainImage": mainImage.asset->url,
      }
    }[0]
  `;

  const params = {
    id: id
  };

  sanity.fetch(query, params).then(data => {
    const articlesCategory = data.posts;
    dispatch({type: CATEGORY_ARTICLES, articlesCategory});
    resolve(articlesCategory);
  })
});

export const removeCurrentProfiles = () => dispatch => new Promise(resolve => {
  dispatch({type: CATEGORY_ARTICLES, articlesCategory: {}});
  resolve({});
});
