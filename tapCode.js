function tapCode(text) {
    let alfabet = [
        ['a', 'b', 'c', 'd', 'e'],
        ['f', 'g', 'h', 'i', 'j'],
        ['l', 'm', 'n', 'o', 'p'],
        ['q', 'r', 's', 't', 'u'],
        ['v', 'w', 'x', 'y', 'z']
    ]
    if(text.substr(0,1) == '.'){
        
        let arr = text.split(' ')
        let xyArr = []
        arr.forEach((el, index) => {
            index%2==0 ? xyArr.push([el.length]) :
            index%2==1 ? xyArr[xyArr.length-1].push(el.length) : 
            null
        })
        let x,y, lettre, word = ''
        xyArr.forEach(el =>{
            x = el[0] - 1
            y = el[1] - 1
            lettre = alfabet[x][y]
            word = word + lettre
        })
        console.log(word)
    }else{
       
        let arr = text.split('')
        let xyArr = []
        arr.forEach(letter =>{
            alfabet.forEach((line, i)=>{
                line.forEach((el, j)=>{
                    el == letter ? xyArr.push([i+1, j+1]) :
                    el === 'k' ? xyArr.push([1, 3]) : null
                })
            })
        })
        let pointArr = ''
        xyArr.forEach(el =>{
            for(let i = 1; i<=el[0]; i++){
                pointArr = pointArr + '.'
            }
            pointArr = pointArr + ' '
            for(let i = 1; i<=el[1]; i++){
                pointArr = pointArr + '.'
            }
            pointArr = pointArr + ' '
        })

       pointArr.substr(pointArr.length, 1)

        console.log(pointArr)
            
    }
}
tapCode('.. ... . ..... ... . ... . ... ....')
// tapCode("greeting")// ".. .. .... .. . ..... . ..... .... .... .. .... ... ... .. ..")
// tapCode("confrontation")// ". ... ... .... ... ... .. . .... .. ... .... ... ... .... .... . . .... .... .. .... ... .... ... ...")
// tapCode("leadership")// "... . . ..... . . . .... . ..... .... .. .... ... .. ... .. .... ... .....")
// tapCode("ankle")// ". . ... ... . ... ... . . .....")
// tapCode("extreme")// ". ..... ..... ... .... .... .... .. . ..... ... .. . .....")
// tapCode(".... .... ... .... ... ... .. .... .. .. .. ... .... ....")// "tonight")
// tapCode("... . ... .... ..... .... . . ... . .... .... ..... ....")// "loyalty")
// tapCode(".... .. . ..... .. . . ..... .... .. .... .. . . ... .")// "referral")
// tapCode(". ..... ..... ... ... ..... .... .. . ..... .... ... .... ... .. .... ... .... ... ...")// "expression")
// tapCode(". . .. . .. . .. .... ... ... .. .... .... .... ..... ....")// "affinity")
// tapCode("correspondence")// ". ... ... .... .... .. .... .. . ..... .... ... ... ..... ... .... ... ... . .... . ..... ... ... . ... . .....")
// tapCode("atmosphere")// ". . .... .... ... .. ... .... .... ... ... ..... .. ... . ..... .... .. . .....")
// tapCode("absolute")// ". . . .. .... ... ... .... ... . .... ..... .... .... . .....")
// tapCode("redundancy")// ".... .. . ..... . .... .... ..... ... ... . .... . . ... ... . ... ..... ....")
// tapCode("infrastructure")// ".. .... ... ... .. . .... .. . . .... ... .... .... .... .. .... ..... . ... .... .... .... ..... .... .. . .....")
// tapCode("... ..... ... .... .. .... ... ... .... ....")// "point")
// tapCode("... ..... .... .. . ..... .. . . ..... .... .. . ..... ... ... . ... . .....")// "preference")
// tapCode(".. .. .... ..... .. .... . .... . .....")// "guide")
// tapCode(". ... .. ... . . .... .. . . . ... .... .... . ..... .... .. .. .... .... ... .... .... .. .... . ...")// "characteristic")
// tapCode(". ... ... .... ... .. ... .. . ..... .... .. . ... . .....")// "commerce")

