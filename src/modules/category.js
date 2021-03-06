import sanity from './sanity';

export const CATEGORY = 'auth/CATEGORY';

const initialState = { currentProfiles: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        currentProfiles: action.category,
      };
    default:
      return state;
  }
};

export const getCurrentSubject = id => dispatch =>
  new Promise(resolve => {
    const query = `*[_type == "category" && slug.current == $id] [0] {
      ...,
      "posts": *[_type == "post" && references(^._id)] [0..23] {
        ...,
        author->,
        category->,
        "mainImage": mainImage.asset->url,
      }
    }
  `;

    const params = {
      id,
    };

    sanity.fetch(query, params).then(category => {
      dispatch({ type: CATEGORY, category });
      resolve(category);
    });
  });

export const removeCurrentSubjects = () => dispatch =>
  new Promise(resolve => {
    dispatch({ type: CATEGORY, category: {} });
    resolve({});
  });
