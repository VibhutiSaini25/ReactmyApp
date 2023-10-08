import { Component } from "react";

//There is predefined class component which has render method in its definition
//That component name is "Component" which is available in react file as a namespace export

//props = {prod:"t-shirt",color:"blue",price:300}
export class Footer extends Component
{
    constructor()
    {
        super();
        this.state = {count:0};
        //If you are writing the handleClick as normal function the below line is complusory
        // this.handleClick = this.handleClick.bind(this);
        //If you are writing the handleClick as arrow function the above line is not complusory
    }

    handleClick = () => {
        //this keyword becomes unknown when we are writing it as user defined function
        this.setState({
            count: this.state.count+1
        })
    }

    render()
    {
        return(
            <div>
                <h1>The {this.props.prod} is in {this.props.color} color and its cost is {this.props.price}</h1>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleClick}>Increase count</button>
            </div>
        )
    }
}