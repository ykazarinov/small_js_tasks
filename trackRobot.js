function trackRobot(...steps) {
	let x = 0
    let y = 0
    steps.forEach((el, index) => {
        (index+1)%4 === 0 ? (x = x - el) : 
        (index+1)%2 === 0 ? (x = x + el) :
        (index+2)%4 === 0 ? (y = y - el) :
        (index+2)%2 === 0 ? (y = y + el) :
        null
    })

    console.log([x, y])
}

trackRobot(20, 30, 10, 40)//, [-10, 10])
trackRobot(10, -10, -10, 10)//, [-20, 20])
trackRobot()//,[0, 0])
trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)//, [6, 5])
trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0)//, [0, 3])
trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5)//, [3, 0])