const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching}

        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
                }

        }
        default:
            return state;
    }

}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => { // set old to new
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => { // set old to new
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUserCount = (count) => { // set old to new
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

export const toggleIsFetching = (isFetching) => { // set old to new
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } //return obj -action
}

export const toggleFollowingProgress = (isFetching, userId) => { // set old to new
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } //return obj -action
}

export default usersReducer;
