var maxFreqSum = function(s) {
    let map=new Map();

    for(let i=0;i<s.length;i++){
        if(!map.get(s[i])){
            map.set(s[i],1)
        }
        else{
            map.set(s[i],map.get(s[i])+1)
        }
    }
    let v=0;
    let c=0;
    for(const [key, value] of map.entries()){
        if(key=="a"||key=="e"||key=="i"||key=="o"||key=="u"){
             if(value>v){
                v=value
             }
        }else
        {
            if(value>c){
                c=value
            }
        }
    }
    return v+c

};

console.log(maxFreqSum("successes"))