function caesarCipher(s, k) {
    let alfabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

    let strArr = s.split('')
    let resultArr = []

    let newAbc = []

    let wordIndexes = []
    let upperCaseIndexes = []

    // create abc with displacement
    alfabet.map((abcLetter, i)=>{
        i+k <= 25 ?
        newAbc.push(alfabet[i+k]) :
        newAbc.push(alfabet[((i+k)%26)])
    })

    // create array of indexes of the words of the thrase
    // if symbol is not a letter, then it add to this array
    // if symbol
    strArr.map((wordLet, j)=>{
        alfabet.map((abcLet, i) =>{
            abcLet === wordLet.toLowerCase() ? wordIndexes.push(i) : 
            i === 25 && wordIndexes.length-1 != j ? wordIndexes.push(wordLet) : null

            abcLet === wordLet.toLowerCase() && wordLet.toUpperCase() === wordLet ? upperCaseIndexes.push(j) : null
            
        })
    })
    // inserting letters from a shifted alphabet by stored indexes
    wordIndexes.map((wordIndex, i) =>{
        newAbc.map((abcLet, j) =>{
            
                wordIndex === j && !(typeof wordIndex === "string") ? 
                    resultArr.push(abcLet) : 
                    typeof wordIndex === "string" && j === 25 ?    
                    resultArr.push(String(wordIndex)) :
                null
        })
   })

   // adding capital letters
   resultArr.map((resEl, i) =>{
        upperCaseIndexes.map((upEl) =>{
            i === upEl ? resultArr[i] = resEl.toUpperCase(): null
        })
   })
    console.log(resultArr.join([]))
}

caesarCipher("middle-Outz5", 2)//, "okffng-Qwvb")
caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)//, "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
caesarCipher("A friend in need is a friend indeed", 20)//, "U zlcyhx ch hyyx cm u zlcyhx chxyyx")
caesarCipher("A Fool and His Money Are Soon Parted.", 27)//, "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49)//, "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")
caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126)//, "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.")