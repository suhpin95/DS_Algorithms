class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    /**
     * 
     * @param {*} key 
     * @returns {Number}
     */
    _hash(key){
        let total = 0;
        const PRIME = 223;

        for(var i = 0; i < Math.min(100,key.length); i++){
            var char = key[i];
            var value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    /**
     * 
     * @param {*} key 
     * @param {*} val 
     * 
     * @returns {HashTable}
     */
    set(key,val){
        // Doesnt handle the case where we can insert diff
        // val for the same key

        // Gives out the first value of the duplicate key
        let index = this._hash(key);
        // if empty
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        // seprate chaining
        this.keyMap[index].push([key,val])
        return this.keyMap;
    }
    /**
     * 
     * @param {*} key 
     */
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(var i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    // you may return only the value if required
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined;
    }
    // Loop through values
    /**
     * @returns {*} valsArr 
     */
    getValues(){
        let valsArr = [];
        for(var i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (var j = 0; j < this.keyMap[i].length; j++){
                    // check for the duplicate
                    if(!valsArr.includes(this.keyMap[i][j][1]))
                    valsArr.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valsArr;
    }
    // Loop through keys
    /**
     * @returns {*} keyArr
     */
    getKeys(){
        let keysArr = [];
        for(var keys of this.keyMap){
            if(keys){
                for(var key of keys){
                    //checking for the duplicates
                    if(!keysArr.includes(key[0])) {
                        keysArr.push(key[0]);
                    }
                }
            }
        }
        return keysArr;
    }
}
let hashTab = new HashTable();
hashTab.set("california","CA");
hashTab.set("florida","FL");
hashTab.set("alabama","AL");
hashTab.set("arizona","AZ");
hashTab.set("iowa","IA");

hashTab.getValues();
hashTab.getKeys();