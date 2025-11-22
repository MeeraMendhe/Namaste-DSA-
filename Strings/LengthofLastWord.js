// var lengthOfLastWord = function(s) {
//     s=s.trim().split(" ");
//     let length=0
//     for(let i=0;i<s[s.length-  1].length;i++){
//         length++
        
//     }
//     return length
// };
const lengthOfLastWord= function(s){
  let max=0;
  let current=0;
  s=s.toLowerCase()
  let char=["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  for(let i=0;i<s.length;i++){
    if(char.includes(s[i])){
        current++;
        if(current>0){
            max=current
        }
        if(max<current){
            max=current
        }
    }else
    {
        current=0;
    }
      
  }
  return max
}

console.log(lengthOfLastWord("Hello World  me  i "))