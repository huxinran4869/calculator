var React= require('react');

let ApplyButton = React.createClass({
    methodGet(){
        this.props.callbackNumCalculate(this.props.sym)
    },
    render: function () {
        return (
            <div className="button-style" id="apply-button" onClick={this.methodGet}>{this.props.sym}</div>
        )
    }
});
module.exports= ApplyButton;
