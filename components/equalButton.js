var React= require('react');

let EqualButton = React.createClass({
    methodEqual() {
        this.props.callbackNumCalculate(this.props.equ)
    },
    render: function() {
        return(
            <div className="equal-button" onClick={this.methodEqual}>{this.props.equ}</div>
        )
    }
});
module.exports = EqualButton;