const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Go for a walk'},
        {id: 4, message: 'Lets do it!'}],
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Slava'},
        {id: 4, name: 'Alex'}]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;
