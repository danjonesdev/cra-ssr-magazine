import sanity from './sanity';

export const AUTHOR = 'auth/AUTHOR';

const initialState = {
  currentProfile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHOR:
      return {
        ...state,
        currentProfile: action.author,
      };
    default:
      return state;
  }
};

export const getCurrentSubject = id => dispatch =>
  new Promise(resolve => {
    const query = `*[_type == "author" && slug.current == $id][0] {
    ...,
    author->,
    "image": image.asset->url,
    "articles": *[_type == "post" && references(^._id)] [0..23] {
      ...,
      "mainImage": mainImage.asset->url,
    }
  }`;

    const params = {
      id,
    };

    sanity.fetch(query, params).then(author => {
      dispatch({ type: AUTHOR, author });
      resolve(author);
    });
  });

export const removeCurrentSubject = () => dispatch =>
  new Promise(resolve => {
    dispatch({ type: AUTHOR, author: {} });
    resolve({});
  });
