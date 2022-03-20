import { ChangeEventHandler } from "react";

interface ISearchBoxProps {
    onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ onSearchChange }: ISearchBoxProps) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search robots..."
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBox;
