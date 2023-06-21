const sumAll = function(firstNumber,lastNumber) {
    let sum=0;
    if(lastNumber<0 || firstNumber<0 || !Number.isInteger(lastNumber) || !Number.isInteger(firstNumber)){
        return 'ERROR';
    }
    if(lastNumber<firstNumber){
        let temp = firstNumber;
        firstNumber = lastNumber;
        lastNumber = temp;
    }
    for(;firstNumber<=lastNumber;firstNumber++){
        sum+=firstNumber;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
