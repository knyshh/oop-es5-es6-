
function Calculator(firstNumber){
    this.firstNumber = firstNumber;

};
Calculator.prototype.sum = function(){
    var result = this.firstNumber;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
};
Calculator.prototype.dif = function(){
    var result = this.firstNumber;
    for(var i = 0; i < arguments.length; i++){
        result -= arguments[i];
    }
    return result;
};

Calculator.prototype.div = function(){
    var result = this.firstNumber;
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i]==0)
        {
            throw new Error("На 0 делить нельзя!");
        }
        result /= arguments[i];
    }
    return result;
};
Calculator.prototype.mul = function(){
    var result = this.firstNumber;
    for(var i = 0; i < arguments.length; i++){
        result *= arguments[i];
    }
    return result;
};


function SqlCalc(firstNumber){
    Calculator.call(this);
};

SqlCalc.prototype = Object.create(Calculator.prototype); //inherit
// Class SqrCalc

function SqlCalc(firstNumber){
    Calculator.call(this,firstNumber);
};

SqlCalc.prototype = Object.create(Calculator.prototype); //inherit
// Class SqrCalc

SqlCalc.prototype.sum = function(){
    let result = Calculator.prototype.sum.apply(this, arguments);
    return result*result;
};
SqlCalc.prototype.dif = function(){
    let result = Calculator.prototype.dif.apply(this, arguments);
    return result*result;
};

SqlCalc.prototype.div = function(){
    let result = Calculator.prototype.div.apply(this, arguments);
    return result*result;
};
SqlCalc.prototype.mul = function(){
    let result = Calculator.prototype.mul.apply(this, arguments);
    return result*result;
};

module.exports = { Calculator,SqlCalc };
