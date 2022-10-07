function sevenBoom(arr) {
    result = 'there is no 7 in the array'
    for(let i = 0; i<arr.length; i++){
        for(let sym of  String(arr[i])){
             if(sym == 7){
                result = 'Boom!';
                break
            }
        }
    }
    console.log(result)
}

sevenBoom([2, 6, 7, 9, 3])
sevenBoom([33, 68, 400, 5])
sevenBoom([86, 48, 100, 66])
sevenBoom([76, 55, 44, 32])
sevenBoom([35, 4, 9, 37])