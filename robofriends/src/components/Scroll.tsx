interface IScrollProps {
    children?: JSX.Element;
}

const Scroll = ({ children }: IScrollProps) => {
    return (
        <div
            style={{
                overflow: "scroll",
                border: "1px solid black",
                height: "800px",
            }}
        >
            {children}
        </div>
    );
};

export default Scroll;
