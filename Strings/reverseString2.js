/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  //if(k>s.length) return s
  let count = 0;
  let norm = 0;
  let str = "";
  let result = "";
  for (let i = 0; i < s.length; i++) {
   // console.log(count, s[i])
    if (count < k) {
      str += s[i];
      count++;
      if (count == k) {
      let r = reverseVal(str);
      result+= r  ;
      str = "";
      count++;
    }
    } else
    if (count > k) {
        result += s[i];
        norm++;
        if (norm == k) {
          count = 0;
          norm = 0;
        }
    }

  }
  return str?result+reverseVal(str):result;
};
function reverseVal(s){
    s=s.split("")
    for(let i=0;i<s.length/2;i++){
        [s[i],s[s.length-1-i]]=[s[s.length-1-i], s[i]]
    }
    return s.join("")
}