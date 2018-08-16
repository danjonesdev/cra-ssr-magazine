import sanity from './sanity'

export const AUTHOR = 'auth/AUTHOR';

const initialState = {
  currentProfile: {}
};

export default(state = initialState, action) => {
  switch (action.type) {
    case AUTHOR:
      return {
        ...state,
        currentProfile: action.author
      };
    default:
      return state;
  }
};

export const getCurrentProfile = id => dispatch => new Promise(resolve => {
  const query =
  `*[_type == "author" && slug.current == $id][0] {
    ...,
    author->,
    "image": image.asset->url,
    "articles": *[_type == "post" && references(^._id)] {
      ...,
      "mainImage": mainImage.asset->url,
    }
  }`;

  const params = {
    id: id
  };

  sanity.fetch(query, params).then(author => {
    dispatch({type: AUTHOR, author});
    resolve(author);
  })
});

export const removeCurrentProfile = () => dispatch => new Promise(resolve => {
  dispatch({type: AUTHOR, author: {}});
  resolve({});
});
