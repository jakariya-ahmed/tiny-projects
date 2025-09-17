

export const initialState = {
    users: [
        { id: 384848, name: "Jakariya Aman", desi: "Frontend Developer", desc: "Lorem ipsum dolor sit amet." },
        { id: 384849, name: "John Doe", desi: "Backend Developer", desc: "Lorem ipsum dolor sit amet." },
        { id: 384850, name: "Jane Smith", desi: "Fullstack Developer", desc: "Lorem ipsum dolor sit amet." }
      ]
}


export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case "DELETE_USER":
            const filteredUsers = state.users.filter(user => user.id !== action.payload)
            return {
                ...state,
                users: filteredUsers,
            }

        default:
            return state;
    }
}








