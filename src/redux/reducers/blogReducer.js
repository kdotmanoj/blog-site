const initialState = {
  blogs: [],
  selectedCategory: null,
  searchTerm: '',
  categories: ['Technology', 'Travel', 'Food', 'Lifestyle'],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return { ...state, blogs: [...state.blogs, action.payload] };
    case 'EDIT_BLOG':
      return {
        ...state,
        blogs: state.blogs.map(blog =>
          blog.id === action.payload.id ? action.payload : blog
        ),
      };
    case 'DELETE_BLOG':
      return { ...state, blogs: state.blogs.filter(blog => blog.id !== action.payload) };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default blogReducer;
