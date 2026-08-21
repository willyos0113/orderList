import type { FC } from "react";

interface GreetingProps {
    name: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
    return (
        <h2>Welcome, {name}!</h2>
    );
}

export default Greeting;