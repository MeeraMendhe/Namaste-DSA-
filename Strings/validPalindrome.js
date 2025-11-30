/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase()  
    let str="";
   // let rev=""
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i))//regular expression /[a to z and  0 to 9]/i
        {
            str+=s[i]
            //rev=s[i]+rev
        }
    }
   // let reverseStr=str.split("").reverse().join()
   // rev is also reverse string of the above no need to loop through the str again
    console.log(str)
    let n=str.length;
    let mid=Math.floor(n/2)
    for(let i=0;i<mid;i++){
        if(str[i]!=str[n-1-i]){
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))