const repeatString = function(repeatString, repeatNumber) {
    let outputMessage='';
    if(repeatNumber<0){
        return 'ERROR';
    }
    while(repeatNumber>0){
        outputMessage+=repeatString;
        repeatNumber--;
    }
    return outputMessage;
};

// Do not edit below this line
module.exports = repeatString;
