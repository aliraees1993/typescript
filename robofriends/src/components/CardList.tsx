import Card from "./Card";

interface IRobot {
    id: number;
    name: string;
    email: string;
}

interface ICardListProps {
    robots: Array<IRobot>;
}

const CardList = ({ robots }: ICardListProps) => {
    return (
        <>
            {robots.map((robot) => {
                return (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                );
            })}
        </>
    );
};

export default CardList;
