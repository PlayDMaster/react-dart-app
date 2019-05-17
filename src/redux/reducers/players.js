import {
    CHANGE_NAME
} from '../constants/action-types';

const initialState = {
    playerInfo: {
        name: 'Scott'
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                playerInfo: {
                    ...state.playerInfo,
                    playerInfo: payload
                }
            }
        default:
            return state
    }
}
