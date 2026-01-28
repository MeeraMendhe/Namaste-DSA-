var removeOuterParentheses = function (s) {
  let level = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      level++
      if (level > 1) {
        str += s[i];
      }
    } else {
      if (level > 1) {
        str += s[i];
      }
      level--;
    }
  }
  return str;
};
let s = "(())(())(())"
//let s = "(()(()))";
console.log(removeOuterParentheses(s));