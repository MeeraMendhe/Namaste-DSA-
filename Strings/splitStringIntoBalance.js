/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let obj={"L":0,"R":0};
    let count=0
    for(let i=0;i<s.length;i++){
        obj[s[i]]++;
        console.log(obj)
        if(obj["L"]==obj["R"]){
            count++;
            obj["L"]=obj["R"]=0
        }
    }
    return count
};

//using temp varible

var balancedStringSplits = function(s) {
    let temp=0;
    let count=0
    for(let i=0;i<s.length;i++){
     if(s[i]=="R"){
        temp++
     }else{
        temp--
     }

     if(temp==0){
        count++
     }
    }
    return count
};