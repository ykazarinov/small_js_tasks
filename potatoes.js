function potatoes(str) {
	var re = /[potato]/g;
    let result = 0
    var myArray = str.match(re);
    myArray.forEach(el=>{
        el === 'p' ? result++ : null
    })
    console.log(result)
}

potatoes("potato")//, 1)
potatoes("potatopotatocherry")//,2 )
potatoes("potatopotatopotatoorange")//, 3)
potatoes("potatopotatobananapotatopotato")//, 4)
potatoes("potatopotatomangopotatopotatopotato")//, 5)
potatoes("potatocucumberpotatopotatopotatopotatopotato")//, 6)