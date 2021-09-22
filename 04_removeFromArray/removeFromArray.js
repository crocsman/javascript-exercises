const removeFromArray = function(arr,one,two,three,four) {
 
    for(let i = 0; i<arr.length; i++)
     {
          if(arr[i]==(one||two||three||four))
        {
         console.log(i);
        //  console.log(i)
         console.log(arr[i]);
         arr.splice(i,1);
         
           
        }
      }    
    
     return arr;
 }
 
// Do not edit below this line
module.exports = removeFromArray;
