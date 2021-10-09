// is Unique: implement an algorithm to determine if a string has 
// all unique characters. what if you cannot use additional data structures?

// solution
function isUnique(str){
    for(let i = 0; i<str.length; i++){
        let newStr = str.substr(i+1)
     if(newStr.includes(str[i])) return false
    }
    return true
}
console.log(isUnique('salt'))
