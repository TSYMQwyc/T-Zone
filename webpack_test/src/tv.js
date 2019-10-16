import React from 'react';
import { Link } from 'react-router-dom';
// import './css/styles.css';
// import $ from 'jquery';

/** 
function getTvList(){
    $.ajax({
        url: 'items.json',
        method: 'get',
        dataType: 'json',
        async: false,
        success: function (data) {
            tvItems = data.tvItems;
            showItems = data.showsItems;
        },
        error: function (error) {
            console.log(error);
        }
    });
}
*/



function obj2arr(obj, arr) {
    var resultArr = [];
    var objArr = Object.values(obj);

    for (let i = 0; i < arr.length; i++) {
        resultArr[i] = <TvItem key={i} id={i} tvname={arr[i]} showname={objArr[i]} />;
    }

    return resultArr;
}

function TvItem(props) {
    return <Link to={"/tv/shows/"+props.id+"/"+props.showname} className="link">{props.tvname}</Link>;
}

function TvList(props) {
    // getTvList();
    var showList = obj2arr(props.show, props.tv);
    return (<React.Fragment>{showList}</React.Fragment>);
}

class TV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tvItems : [],
            showItems : {}
        }
    }

    //fetch   
    componentWillMount(){
        fetch("items.json", {
            method: "get"
        }).then(res => {        //then()相当于传统ajax的success
            res.json().then((res) => {  
                this.setState({
                    tvItems: res.tvItems,
                    showItems: res.showsItems
                });
            })
        });
    }

    render() {
        return (
            <div className="tvlist">
                电视节目列表 &gt;&nbsp;&nbsp;
                <TvList show={this.state.showItems} tv={this.state.tvItems}/>
            </div>
        );
    }
}

export { TV as default };