import { useEffect, ChangeEventHandler, ChangeEvent } from "react";
import { connect } from "react-redux";

import "./../styles/App.css";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import { searchRobotsAction } from "../actions/searchRobotsAction";
import { requestRobotsAction } from "../actions/requestRobotsAction";

interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {
    onSearchChange: ChangeEventHandler<HTMLInputElement>;
    searchRobots: string;
    onRequestRobots: any;
    robots: Array<IRobot>;
    isPending: boolean;
}

interface ISearchRobotsReducer {
    searchRobots: string;
}

interface IRequestRobotsReducer {
    robots: Array<IRobot>;
    isPending: boolean;
    error: string;
}

interface IAppState {
    searchRobotsReducer: ISearchRobotsReducer;
    requestRobotsReducer: IRequestRobotsReducer;
}

const mapStateToProps = (state: IAppState) => {
    return {
        searchRobots: state.searchRobotsReducer.searchRobots,
        robots: state.requestRobotsReducer.robots,
        isPending: state.requestRobotsReducer.isPending,
        erorr: state.requestRobotsReducer.error,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchChange: (event: ChangeEvent<HTMLInputElement>) =>
            dispatch(searchRobotsAction(event.target.value)),
        onRequestRobots: () => dispatch(requestRobotsAction()),
    };
};

const App = ({
    onSearchChange,
    searchRobots,
    onRequestRobots,
    robots,
    isPending,
}: IAppProps) => {
    useEffect(() => {
        onRequestRobots();
    }, []);

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchRobots.toLowerCase());
    });

    return (
        <div className="tc">
            {isPending ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox onSearchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </>
            )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
