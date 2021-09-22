const reverseString = function(str) {
    let reveresed ="";
    let lengthOfStr = 0;
    while(lengthOfStr <  str.length)
    {

        reveresed  = reveresed + str.substr((-1*(lengthOfStr+1)),1);   //extract last character and add to reversed
        lengthOfStr++;
     }

    return reveresed;
};



// Do not edit below this line
module.exports = reverseString;
