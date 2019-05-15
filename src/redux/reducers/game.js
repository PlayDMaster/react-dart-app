import {
    SET_GAME_TYPE
} from '../constants/action-types';

const initialState = {
    gameType: 501
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_GAME_TYPE:
            return {
                ...state,
                gameType: payload
            }

        default:
            return state
    }
}
