import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        fetch("http://127.0.0.1:8080/reactTest", {
            mode: "cors",
            method: "get"
        }).then(res => {        
            res.json().then((res) => {
                console.log(res);
            })
        }).catch( error => console.log(error) );
    }

    render() {
        return (
            <div>
                <div className="tvmenu">
                    <Link to="/home" className="link" >首页</Link>
                    &nbsp;&nbsp;
                    <Link to="/tv" className="link" >电视</Link>
                    &nbsp;&nbsp;
                    <Link to="/subscription" className="link" >订阅</Link>
                    &nbsp;&nbsp;
                    <a className="link" onClick={this.handleClick}>Springboot</a>
                </div>
            </div>
        )
    };
}

export { App as default };