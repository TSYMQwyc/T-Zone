import React from 'react';
import './css/carousel.css';

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="frame">
                <ul className="carousel" id="img_list">
                    <li><img src={require("./pic/d1.jpg")} alt="d1" /></li>
                    <li><img src={require("./pic/d2.jpg")} alt="d2" /></li>
                    <li><img src={require("./pic/d3.jpg")} alt="d3" /></li>
                    <li><img src={require("./pic/d4.jpg")} alt="d4" /></li>
                </ul>

                <ol className="order" id="order_list">
                    <li id="ol0" className="active"></li>
                    <li id="ol1"></li>
                    <li id="ol2"></li>
                    <li id="ol3"></li>
                </ol>

                <div id="previous">&lt;</div>
                <div id="next">&gt;</div>
            </div>
        );
    }
}

export { Home as default };