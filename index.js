function sym() {
    // create array of arguments
   var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    function deltaTwoArr(arrayOne, arrayTwo){
        let result = []
        
        arrayOne.forEach(item => {
            if(arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0){
                result.push(item)
            }            
        });

        arrayTwo.forEach(item => {
            if(arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0){
                result.push(item)
            }            
        });


      return result;
    }
  
  return args.reduce(deltaTwoArr);
  
      
  }

  console.log(sym([1, 2, 3], [5, 2, 1, 4]));