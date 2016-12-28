var React= require('react');

let NumButton = React.createClass({
    numGet(){
        this.props.callbackNumShow(this.props.num)
    },
    render: function(){
        return(
            <div className="button-style" onClick={this.numGet}>{this.props.num}</div>
        );
    }
});
module.exports= NumButton;
