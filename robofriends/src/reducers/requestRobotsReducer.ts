import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL,
} from "../constants/constant";

interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAction {
    type: string;
    payload: Array<IRobot>;
}

interface IState {
    isPending: boolean;
    robots: Array<IRobot>;
    error: string;
}

export const requestRobotsReducer = (
    state: IState = {
        isPending: false,
        robots: [],
        error: "",
    },
    action: IAction
) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                robots: action.payload,
                isPending: false,
            });
        case REQUEST_ROBOTS_FAIL:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
            });
        default:
            return state;
    }
};
