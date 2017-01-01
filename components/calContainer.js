var React = require('react');

var NumButton  = require('./numButton');
var ApplyButton= require('./applyButton');
var EqualButton = require('./equalButton');

let CalContainer = React.createClass({
    getInitialState() {
        return({
            numResult: '0',
            arrSgNum: [],
            arrCbNum: [],
            arrInputNum: []
        })
    },
    numShow(ac) {
        let _arrSgNum = this.state.arrSgNum;
        ac!="b"?_arrSgNum.push(ac):_arrSgNum.splice(-1,1);
        console.log(_arrSgNum);
        if (_arrSgNum.length > 16) {
            _arrSgNum.pop();
            alert("max length of input number is 16");
            return _arrSgNum
        }
        let _arrCbNum = this.state.arrCbNum, screenShow= _arrSgNum.join("");
        _arrCbNum.push(parseFloat(screenShow));
        this.setState({
            numResult: screenShow
        });
    },
    numCalculate(s) {
        let _num = this.state.arrCbNum[this.state.arrCbNum.length-1];
        let _arrInputNum = this.state.arrInputNum;
        _arrInputNum.push(_num,s);
        let str = _arrInputNum.join("");
        console.log(str);
        switch(s){
            case "+" :
            case "-" :
            case "*" :
            case "/" :
                this.setState({
                    numResult: '',
                    arrSgNum: [],
                    arrCbNum: []
                });
                break;
            case "=" :
                this.setState({
                    numResult: parseFloat(eval(str.substr(0,str.length-1)).toPrecision(16)),
                    arrSgNum: [],
                    arrCbNum: [],
                    arrInputNum: [parseFloat(eval(str.substr(0,str.length-1)).toPrecision(16))]
                });
                break;
            case "c" :
                this.setState({
                    numResult: '0',
                    arrSgNum: [],
                    arrCbNum: [],
                    arrInputNum: []
                });
                console.log("clear all");
                break;
        }
    },
    render: function () {
        return(
            <div className = "outside-wrapper">
                <div className = "num-screen">{this.state.numResult}</div>
                <div className = "button-container">
                    {[0,1,2,3,4,5,6,7,8,9,'.','b'].map((x,i) =><NumButton key = {i} num = {x} callbackNumShow = {this.numShow}/>)}
                </div>
                <div className="apply-container">
                    {["+","-","*","/"].map((y,t)=><ApplyButton key={t} sym={y} callbackNumCalculate={this.numCalculate}/>)}
                </div>
                <div>
                    <EqualButton equ="c" callbackNumCalculate={this.numCalculate}/>
                    <EqualButton equ="=" callbackNumCalculate={this.numCalculate}/>
                </div>
            </div>
        );
    }
});
module.exports= CalContainer;
