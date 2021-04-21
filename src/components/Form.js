import { Component } from "react";

// function User(props) {
//     return <li>{ props.info }</li>;
// }

// export default User;


class Form extends Component {
    constructor(){
        super();
        this.state = {data: "",message: ""};
        this.doPrintingT = this.doPrinting.bind(this);
    }
    
doPrinting(event) {
    this.setState({name : event.target.value});
}
SayHello(event) {
    console.log("Click Submit!!!")
    this.props.onSayHi(this.state.name)
    // this.setState({message : "Hello " + this.state.name});
}

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onKeyUp={this.doPrintingT} 
                />
                <button onClick={() => this.SayHello()}>Submit!!!</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
    
}

export default Form;
