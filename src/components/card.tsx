
interface ICard {
    title?: string;
    description: string;
    color?: string;
}
export default function Card({ card }: { card: ICard }) {

    const bgColor = `w-32 h-64  bg-${card.color}`;

    return (
        <div className={bgColor}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </div>
    );
}

export function Card2 ({ card }: { card: ICard }) {
    const bgColor = `w-32 h-64  bg-${card.color}`;

    return (
        <div className={bgColor}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </div>
    );
}