function deepEqual(m, n) {
    if (m === n){
        return true
    }

    if (Number.isNaN(m) && Number.isNaN(n)) {
        return true;
    }
    if (m === null && n === null) {
        return true;
    }
    if (m === undefined && n === undefined) {
        return true;
    }
    if ((typeof m == "object" && m != null) && (typeof n == "object" && n != null)) {
        if (Object.keys(m).length != Object.keys(n).length)
        return false;
    
        for (var val in m) {
          const keysObj = Object.keys(n)
          if (keysObj.includes(val))
            {
                if (! deepEqual(m[val], n[val])) return false;
            }
          else return false;
        } 
        return true;}
        else return false;
}