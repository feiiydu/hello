import { Component } from "react";

class Clock extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }

    componentDidMount() { // ตอนที่ component นี้เริ่มใช้
        setInterval( () => { this.setState({date: new Date()})}, 1000 ); // {ทำอะไร}, ทุกๆ 1000 ms
    }
    componentWillMount() { // ตอนที่ component นี้เลิกใช้

    }

    render() {
        return <div> Current date = {this.state.date.toLocaleTimeString()} </div>;  
    }
    
}

export default Clock;
