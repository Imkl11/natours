var compareVersion = function(version1, version2) {
    const version1Arr = version1.split('.').map((n) => parseInt(n));
    const version2Arr = version2.split('.').map((n) => parseInt(n));
    const maxLength = Math.max(version1Arr.length, version2Arr.length);
    for (let index = 0; index < maxLength; index++) {
        const v1 = version1Arr[index] ?? 0;
        const v2 = version2Arr[index] ?? 0;

        if(v1 > v2) return 1
        if(v1 < v2) return -1
        
    }

    return 0
    
};

console.log(compareVersion("1.2", "1.10"))
console.log(compareVersion("1.01", "1.001"))
console.log(compareVersion("1.01", "1.001"))
console.log(compareVersion("1.0", "1.0.0.0"))