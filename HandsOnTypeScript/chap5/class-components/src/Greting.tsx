import React from "react";

interface GreetingProps {
    message : string;
}

export default class Greeting extends React.Component<GreetingProps> {
    render() {
        console.log("rendering Greeting");
        return <div>{this.props.message}</div>
    }
}