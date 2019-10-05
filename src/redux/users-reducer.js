const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*{id: 1, photoUrl:'http://bootstraptema.ru/snippets/icons/2016/mia/3.png', followed: false, fullName: 'Kirill', status: 'Go go go', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, photoUrl:'http://propsyteen.ru/wp-content/themes/siteseed/css/boy0.png', followed: true, fullName: 'Ivan', status: 'Hello World', location: {city: 'Spb', country: 'Russia'}},
        {id: 3, photoUrl:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png', followed: false, fullName: 'Svetlana', status: 'Sunshine', location: {city: 'Minsk', country: 'Belarus'}},*/
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                /* users: [ ...state.users]
                 users: state.users.map(u => u)*/  //same
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true} //id same - return copy
                    }
                    return u; //id no same - return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}

        }
        default:
            return state;
    }

}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => { // set old to new
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;
