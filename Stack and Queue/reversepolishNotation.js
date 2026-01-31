var evalRPN = function(tokens) {
    let stack=[];
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]=="+"||tokens[i]=="-"||tokens[i]=="/"||tokens[i]=="*"){
            let y=stack.pop();
            let x=stack.pop();
            let ans=Math.trunc(eval(`${x} ${tokens[i]} ${y}`));
            stack.push(ans.toString())
        }else{
            stack.push(tokens[i])
        }
    }
    return Number(stack.pop())  
};
const calculate=(x,y,operator)=>{
    console.log(x,y)
    switch (operator) {
    case '+':
      return x+y;
    case '-':
      return x-y;
    case '*':
      return  x*y;
    case '/':
        return Math.trunc(x/y);
    default:
      return "Invalid operator";
  }
}
//let s=["4","13","5","/","+"]
let s=["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
//let s=["4","-2","/","2","-3","-","-"]
console.log(evalRPN(s))