Array.prototype.count = function (callback) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) count++;
    }
    return count;
}