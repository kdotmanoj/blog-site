export const addBlog = (blog) => ({
  type: 'ADD_BLOG',
  payload: blog,
});

export const editBlog = (blog) => ({
  type: 'EDIT_BLOG',
  payload: blog,
});

export const deleteBlog = (id) => ({
  type: 'DELETE_BLOG',
  payload: id,
});

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  payload: category,
});

export const setSearchTerm = (term) => ({
  type: 'SET_SEARCH_TERM',
  payload: term,
});

export const updateBlog = (blog) => ({
  type: 'UPDATE_BLOG',
  payload: blog
});