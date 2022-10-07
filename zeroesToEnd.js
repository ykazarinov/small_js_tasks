function zeroesToEnd(a) {
    for(let i = a.length - 1; i>=0; i--){
        if(a[i] == 0){
           a.splice(i, 1)
           a.push(0) 
        }
    }
    console.log(a)
}

let a1, a2, a3, a4, a5

a1 = [1, 2, 0, 0, 4, 0, 5]
a2 = [0, 0, 1, 3]
a3 = [0, 0, 2, 0, 5]
a4 = [4, 4, 5]
a5 = [0, 0]

zeroesToEnd(a1)
zeroesToEnd(a2)
zeroesToEnd(a3)
zeroesToEnd(a4)
zeroesToEnd(a5)

// [1, 2, 4, 5, 0, 0, 0]
// [1, 3, 0, 0]
// [2, 5, 0, 0, 0]
// [4, 4, 5]
// [0, 0]