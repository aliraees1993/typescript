import { SEARCH_ROBOTS } from "../constants/constant";

export const searchRobotsAction = (text: string) => ({
    type: SEARCH_ROBOTS,
    payload: text,
});
