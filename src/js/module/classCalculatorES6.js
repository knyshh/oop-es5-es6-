class CalculatorES6{
    constuctor(firstNumber){
       this.firstNumber = firstNumber;
    };
    sum() {
        var result = this.firstNumber;
        for(var i = 0; i < arguments.length; i++){
            result += arguments[i];
        }
        return result;
    }

    dif() {
        var result = this.firstNumber;
        for(var i = 0; i < arguments.length; i++){
            result -= arguments[i];
        }
        return result;
    }

    div() {
        var result = this.firstNumber;
        for(var i = 0; i < arguments.length; i++){
            if(arguments[i]==0)
            {
                throw new Error("На 0 делить нельзя!");
            }
            result /= arguments[i];
        }
        return result;
    }
    mul() {
        var result = this.firstNumber;
        for(var i = 0; i < arguments.length; i++){
            result *= arguments[i];
        }
        return result;
    }
}

class SqlCalcES6 extends CalculatorES6 {
    constructor(firstNumber){
        super(firstNumber);
    }

    sum(){
        let result = super.sum(...arguments);
        return result * result;
    }
    dif(){
        let result = super.dif(...arguments);
        return result * result;
    }
    div(){
        let result = super.div(...arguments);
        return result * result;
    }
    mul(){
        let result = super.mul(...arguments);
        return result * result;
    }
}