const sumAll = function(begin,end) {
    console.log(typeof(end));
    let sum = 0;
    if(typeof(end)=="number")
    {
        for(let i = begin; i <= end; i++)
        {
            sum+=i;
        }
    }

    else{
        sum = "ERROR"
    }
    return sum;
};
 

// Do not edit below this line
module.exports = sumAll;
