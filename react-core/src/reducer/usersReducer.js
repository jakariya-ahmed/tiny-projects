

export const initialState = {
    // Without localStorage
   /* users: [
        { id: 384848, name: "Jakariya Aman", desi: "Frontend Developer", desc: "Lorem ipsum dolor sit amet." },
        { id: 384849, name: "John Doe", desi: "Backend Developer", desc: "Lorem ipsum dolor sit amet." },
        { id: 384850, name: "Jane Smith", desi: "Fullstack Developer", desc: "Lorem ipsum dolor sit amet." }
      ] */
    
    // Load data on start
    users: JSON.parse(localStorage.getItem('users') || "[]"),

}


export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_USER":
            const added = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(added)); // store in localStorage
            return {...state, users: added};

        case "DELETE_USER":
            const filteredUsers = state.users.filter(user => user.id !== action.payload)
            localStorage.setItem('users', JSON.stringify(filteredUsers));
            return {...state,users: filteredUsers}

        default:
            return state;
    }
}








