module.exports = function check(str, bracketsConfig) {
    let re ;
    for(let i in str){
    for (let value of bracketsConfig) {
        !isNaN(value[0]) ? re = new RegExp(`${value[0]}${value[1]}`,"g") : re = new RegExp(`\\${value[0]}\\${value[1]}`,"g");
        str = str.replace(re, '')
    }
    if (str.length==0)
        return true;
    } 
    if (str.length!=0){
        return false
    } else
    return true
}
