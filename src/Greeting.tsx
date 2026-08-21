interface GreetingType {
    name: string;
}

function Greeting({ name }: GreetingType) {
    return (
        <h2>Welcome, {name}!</h2>
    );
}

export default Greeting;