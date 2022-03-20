import { SEARCH_ROBOTS } from "../constants/constant";

interface IAction {
    type: string;
    payload: string;
}

interface IState {
    searchRobots: string;
}

export const searchRobotsReducer = (
    state: IState = { searchRobots: "" },
    action: IAction
) => {
    switch (action.type) {
        case SEARCH_ROBOTS:
            return Object.assign({}, state, { searchRobots: action.payload });
        default:
            return state;
    }
};
