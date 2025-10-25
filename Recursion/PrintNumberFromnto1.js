function print(n){
    if(n==0) return
    console.log(n);
    n--;
    print(n)
}
print(5)