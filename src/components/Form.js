import { Component } from "react";

// function User(props) {
//     return <li>{ props.info }</li>;
// }

// export default User;


class Form extends Component {
    constructor(){
        super();
        this.state = {data: ""};
        this.doPrinting = this.doPrinting.bind(this);
    }
    
doPrinting(event) {
    this.setState({data :  this.state.data + event.key});
}

    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.doPrinting} />
                <p>Hello : {this.state.data}</p>
            </div>
        );
    }
    
}

export default Form;
