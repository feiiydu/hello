import { Component } from "react";
import FormTodo from "./components/FormTodo";

class Todo extends Component {


    constructor() {
        super()
        this.state = {task:"",message: ""};
        this.addNewTask = this.addNewTask.bind(this);
    };

    addNewTask(input) {
        this.setState({task: input,message:this.state.message})
    };

    render() {
        return (
            <div>
                <FormTodo />
            </div>
        );
    }
}

export default Todo;