const groupAnagrams = (strs) => {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let freq = Array(26).fill(0);

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freq[index]++;
    }
    let key = "";
    for (let j = 0; j < 26; j++) {
      key += String.fromCharCode(j) + freq[j];
    }

    if (!obj[key]) {
      obj[key] = [s];
    } else {
      obj[key].push(s);
    }
  }
  return [...Object.values(obj)];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
