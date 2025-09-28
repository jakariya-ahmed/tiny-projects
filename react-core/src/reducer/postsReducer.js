
export const initialState = {
    // Load data on start
    posts: JSON.parse(localStorage.getItem('posts') || "[]"),
}


export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_POST":
            const added = [...state.posts, action.payload];
            localStorage.setItem('posts', JSON.stringify(added)); // store in localStorage
            return {...state, posts: added};

        case "DELETE_POST":
            const filteredPosts = state.posts.filter(post => post.id !== action.payload)
            localStorage.setItem('posts', JSON.stringify(filteredPosts));
            return {...state,posts: filteredPosts}

        default:
            return state;
    }
}


