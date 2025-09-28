function starPatter(m, n) {
  let result = "";
  for (let i = 0; i < m; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "* ";
    }
    result += str + "\n";
  }
  return result;
}


console.log(starPatter(3,3))