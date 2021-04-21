import { Component } from "react";

// function User(props) {
//     return <li>{ props.info }</li>;
// }

// export default User;


class User extends Component {
    render() {
        const data = this.props.users.map((user) => ( //loop for each put in 'data'
            <li key={user.id}>
                { user.name } , { user.age }
            </li>
        ));
        return (
            <ul>{data}</ul>
            


            // <ul>
            //     {his.props.User.map((user)=>())}
            //     <li>{ this.props.info } - { this.props.age }</li>;)
            // </ul>
        )        
    }
    
}

export default User;
