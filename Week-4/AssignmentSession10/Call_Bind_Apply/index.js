class calculator{
    add(num1,num2){
        return num1+num2;
    }
    subtract(num1,num2)
    {
        return num1-num2;
    }
    multiply(num1,num2)
    {
        return num1*num2;
    }
    divide(num1,num2){
        if(num2===0){
            throw new Error("Cannot divide by zero")
        }
        return num1/num2
    }
}

class ScientificCalculator extends calculator{
    square(num){
        return num**2;
    }
    cube(num){
        return num**3;
    }
    power(num1,num2){
        return num1**num2;
    }
}

const sciCalc=new ScientificCalculator();

const sum=calculator.prototype.add.call(this,10,5)
console.log(sum);

const diff=calculator.prototype.subtract.apply(this,[10,5]);
console.log(diff);

const multiplybytwo=calculator.prototype.multiply.bind(sciCalc,2);
console.log(multiplybytwo(5));

const powerOfThree=calculator.prototype.power.bind(sciCalc,sciCalc);
console.log(powerOfThree(2,3));







