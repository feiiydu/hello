import { clean } from "gh-pages";
import { Component } from "react";

class FormTodo extends Component {

    tasks = []
    constructor(){
        super();
        this.state = {task: "",message: "0 remaining out of 0 tasks"};
        this.doPrintingT = this.doPrinting.bind(this);
    }

    doPrinting(event) {
        this.setState({task : event.target.value});
    }

    CheckRemaining() {
        var remaining = 0
        this.tasks.forEach(task => {
            if (!task.isDone) {
                remaining++
            }
        });
        return remaining
    }

    AddTask(event) {
        console.log("Click add task")
        console.log(this.state.task)
        this.tasks.push({id: this.tasks.length+1,task:this.state.task,isDone:false})
        console.log(this.tasks)
        var remaining = this.CheckRemaining()
        var all = (this.tasks.length).toString()
        console.log(remaining , all)
        this.setState({message:remaining +" remaining out of "+all+" tasks"})
    }

    render() {
        const data = this.tasks.map((task) => ( //loop for each put in 'data'
            <li key={task.id}>
                { task.task }
            </li>
            
        ));
        return (
            <div>
                <br/>
                <input 
                    id="text-field"
                    type="text" 
                    onKeyUp={this.doPrintingT} 
                />
                <button onClick={() => this.AddTask()}>Add</button>
                <p>{this.state.message}</p>
                <ul>{data}</ul>
            </div>  
        );
    }

}


export default FormTodo;