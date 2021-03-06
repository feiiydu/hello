import { Component } from "react";

class Clock extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }


    // React's component life cycle
    componentDidMount() { // ตอนที่ component นี้เริ่มใช้
       this.interval = setInterval( () => { this.setState({date: new Date()})}, 1000 ); // {ทำอะไร}, ทุกๆ 1000 ms
    }
    componentWillMount() { // ตอนที่ component นี้เลิกใช้
        clearInterval(this.interval)
    }

    render() {
        return <div> {this.props.title} {this.state.date.toLocaleTimeString()} </div>;  
    }
    
}

export default Clock;
