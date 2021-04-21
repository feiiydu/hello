import { Component } from "react";

// function User(props) {
//     return <li>{ props.info }</li>;
// }

// export default User;


class User extends Component {
    render() {
        return <li>{ this.props.info } - { this.props.age }</li>;
    }
    
}

export default User;
