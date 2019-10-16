import React from 'react';


class Shows extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params)
    }

    render() {
        return (
            <div>
                <h3>节目{Number(this.props.match.params.id)+1}：{this.props.match.params.name} 内容很精彩</h3>
            </div>
        );
    }
}

export { Shows as default } ;