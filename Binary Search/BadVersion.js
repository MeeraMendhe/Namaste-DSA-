/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let r=n
        let l=1
        let ans
        while(l<r){
            let mid=Math.floor((r+l)/2)
            if(isBadVersion(mid)){
                r=m
            }else{
                l=m
            }
        }
    };
};

/*/
while(l<=r){
 r=m-1
 l=m+1
}

while(l<r){
 r=m-1
 l=m
}

while(l+1<r){
 r=m
 l=m
/*/