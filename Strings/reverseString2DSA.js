
var reverseStr = function(s, k) {
  let str=s.split("")
  console.log(str)
  for (let i = 0; i < str.length; i=i+(2*k)) {
    let n=k;
    let mid=Math.floor(n/2)
    for(let j=0;j<mid;j++){
         [str[i+j],str[i+n-1-j]]=[str[i+n-1-j], str[i+j]]
    }

  }
  return str.join("")
};

console.log(reverseStr("abcdef",2))