const frequency_counter = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let seen = {};
    for (let i = 0; i < arr1.length; i++) {
        const double = arr1[i] * arr1[i];
        if(seen.hasOwnProperty(double)) {
            seen[double] = seen[double] + 1;
        } else {
            seen[double] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (seen[arr2[i]] > 0) {
            seen[arr2[i]] = seen[arr2[i]] - 1;
        } else {
            return false;
        }
    }
    return true;
}