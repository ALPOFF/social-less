const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {
                ...state,
                users: action.users}

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage}

        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count}

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

export const setCurrentPageAC = (currentPage) => { // set old to new
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUserCountAC = (count) => { // set old to new
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

export default usersReducer;
