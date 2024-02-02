const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let texto="";
  let numbers =0;
  let longitudPalabra =0;
  
  for(let i = 0;i<param.length; i++)
  if(typeof param [i]=== "number" ){
numbers+= param[i]
  }else if (typeof param[i]=== "string")
  {  
    

    texto+=param[i];
    longitudPalabra += param[i].length;
    
  }
  return{longitudPalabra,numbers} ;
  }
  // insert code

console.log(averageWord(mixedElements));