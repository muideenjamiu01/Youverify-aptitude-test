// string compression: implement a method to perform basic string compression
//  using the counts of repeated characters.

const compress = function(str){
    let myRegex = /a+|b+|c+/ig
    let result = str.match(myRegex)
    let isSimpleString = result.every((item) => {return item.length === 1 });

    if(isSimpleString) return str;

    for( let [i, strs] of result.entries()){
        result[i] = result[i].replace(strs, strs[0] + strs.length)
    }
    return result.join('')
}

console.log(compress('bca'));//bca
console.log(compress('aaabcaaa')); //a3b1c1a3
console.log(compress('aaaaabbbbcccccaaa')); //a5b4c5a3
